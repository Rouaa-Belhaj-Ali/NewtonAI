"use client";
import React, { useState } from "react";
import * as z from "zod";
import axios from "axios";
import { Heading } from "@/components/heading";
import Configuration from "openai";
import { ChatCompletionRequestMessage } from "openai";
import { formSchema } from "./constants";
import { MessageSquare } from "lucide-react";
import {  useForm } from "react-hook-form";
import {zodResolver } from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem} from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
//import { useRouter } from "next/router";
const ConversationPage = () => {

    const router = useRouter();
    const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

    const  form = useForm<z.infer<typeof formSchema>>({

       

        resolver : zodResolver(formSchema),

        defaultValues: {
            prompt: ""
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {

        try {
      const userMessage: ChatCompletionRequestMessage = { role: "user", content: values.prompt };
      const newMessages = [...messages, userMessage];

      const response = await axios.post('/api/conversation', { messages: newMessages });
      setMessages((current: any) => [...current, userMessage, response.data]);
      form.reset();
      
      

        }

    

        catch (error) {

            console.log ();
        }   finally {

            router.refresh();
        }

    }

        
    


    return ( 
        <><Heading title="Conversation"
            description="Our most advanced conversation model."
            Icon={MessageSquare}


            IconColor="text-violet-500"
            bgColor="bg-violet-500/10" />
            <div className="px-4 lg:px-8">

                <div>
                    <Form {...form}>

                        <form  onSubmit={form.handleSubmit(onSubmit)}

                        className="
                        rounded-lg
                        border
                        w-full
                        p-4
                        px-3
                        md:px-6
                        focus-within:shadow-sm
                        grid
                        grid-cols-12
                        gap-2
                        "
                        >

                       <FormField  name="prompt"
                       render={({ field })  => (
                        <FormItem  className="col-span-12 lg: col-span-10">
                            <FormControl className="m-0 p-0 ">

                                <Input  className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"

                                disabled={isLoading}
                                placeholder="How can I center a div "


                                {...field}
                                
                            
                                />
                            </FormControl>


                        </FormItem>
                       )}
                       />

                       <Button className="col-span-12 lg:col-span-2 w-full disabled={isLoading}">
                        Generate
                       </Button>

                        </form>
                        </Form>


                </div>
                <div className="space-y-4 mt-4">
                    <div  className="flex  flex-col-reverse gap-y-4">
                        {messages.map((message) =>(
                        <div key={message.content}>

                            {message.content}

                        </div>
                       )) }

                    </div>
                </div>
            </div>
            </>

     );
    };    

export default ConversationPage;