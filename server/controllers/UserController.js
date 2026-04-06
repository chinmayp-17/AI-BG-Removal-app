import {Webhook} from 'svix'
import userModel from '../models/userModel.js'

const clerkWebhooks = async(req,res) => {
    try{
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        await whook.verify(JSON.stringify(req.body),{
            'svix-id': req.headers['svix-id'],
            'svix-timestamp': req.headers['svix-timestamp'],
            'svix-signature': req.headers['svix-signature']
        })
        const {data,type} = req.body

        if(type === 'user.created'){
            const userData = {
                clerkId: data.id,
                email: data.email_addresses[0].email_address,
                firstName: data.first_name,
                lastName: data.last_name,
                photo: data.image_url
            }
            await userModel.create(userData)
            res.json({success: true})
        }
        else if(type === 'user.updated'){
            const userData = {
                email: data.email_addresses[0].email_address,
                firstName: data.first_name,
                lastName: data.last_name,
                photo: data.image_url
            }
            await userModel.findOneAndUpdate({ clerkId: data.id }, userData)
            res.json({success: true})
        }
        else if(type === 'user.deleted'){
            await userModel.findOneAndDelete({ clerkId: data.id })
            res.json({success: true})   
        }
    }
    catch(err){
        console.log(err.message)
        res.json({success: false})
    }
}

export {clerkWebhooks}