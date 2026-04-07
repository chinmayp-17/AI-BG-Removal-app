import { Webhook } from 'svix'
import userModel from '../models/userModel.js'

const clerkWebhooks = async (req, res) => {
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        // 1. Check for missing headers first
        const svix_id = req.headers['svix-id'];
        const svix_timestamp = req.headers['svix-timestamp'];
        const svix_signature = req.headers['svix-signature'];

        if (!svix_id || !svix_timestamp || !svix_signature) {
            return res.status(400).json({ success: false, message: 'Missing Svix headers' });
        }

        // 2. Verify the payload. 
        // Note: req.body MUST be a raw buffer/string for this to work.
        // The verify method returns the parsed JSON object if successful.
        const payloadString = req.body.toString();
        const evt = whook.verify(payloadString, {
            'svix-id': svix_id,
            'svix-timestamp': svix_timestamp,
            'svix-signature': svix_signature
        });

        const { data, type } = evt;

        // 3. Handle the Webhook Events
        if (type === 'user.created') {
            const userData = {
                clerkId: data.id,
                email: data.email_addresses[0].email_address,
                firstName: data.first_name,
                lastName: data.last_name,
                photo: data.image_url
            };
            await userModel.create(userData);
            return res.status(200).json({ success: true, message: 'User created' });
        } 
        else if (type === 'user.updated') {
            const userData = {
                email: data.email_addresses[0].email_address,
                firstName: data.first_name,
                lastName: data.last_name,
                photo: data.image_url
            };
            await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
            return res.status(200).json({ success: true, message: 'User updated' });
        } 
        else if (type === 'user.deleted') {
            await userModel.findOneAndDelete({ clerkId: data.id });
            return res.status(200).json({ success: true, message: 'User deleted' });
        }

        // 4. Catch-all for other event types (so the request doesn't hang)
        return res.status(200).json({ success: true, message: 'Webhook received but unhandled type' });

    } catch (err) {
        // CRITICAL FIX: Send a 400 status code so Clerk registers it as a "Failed" delivery!
        console.error('Webhook Error:', err.message);
        return res.status(400).json({ success: false, message: err.message });
    }
};

export { clerkWebhooks };