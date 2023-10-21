"use client"

import NavTrailer from "@/components/custome/NavTrailer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast"
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion"


const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }).email("This is not a valid email address"),
    message: z.string().min(10, {
        message: "Message should not have 10 characters"
    }).max(500, {
        message: "Message should have less than 500 characters"
    })
})

export default function Contact() {
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            message: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        toast({
            title: "hello",
            description: values.username + values.email + values.message
        })
    }

    return (
        <div>
            <NavTrailer />

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }}
                className="p-10">
                <motion.p
                    initial={{ scale: 3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, transition: { delay: 0.2, type: "spring" }, inlineSize: 2 }}
                    className="text-center text-2xl">
                    Let's Get in Touch:
                </motion.p>

                <div className=" pt-5 md:px-20">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="your name" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="email@email.com" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="type you message here..." className="h-40 " />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1, transition: { delay: 0.1, type: "just" } }}
                            >
                                <Button className="w-full" type="submit">Submit</Button>
                            </motion.div>
                        </form>
                    </Form>
                    <Toaster />
                </div>
            </motion.div>
        </div>
    )
}