import { cn } from "@/lib/utils";
import { Description } from "@radix-ui/react-dialog";
import { LucideIcon } from "lucide-react";
import { title } from "process";

interface HeadingProps {
    title : string;
    description : string;
    Icon : LucideIcon;
    IconColor? : string;
    bgColor? : string;
}
export const  Heading =  ( {

    title,
    description,
    Icon,
    bgColor,
    IconColor
    

     }:  
    HeadingProps) => {


       
        return(
            <>
            <div className="px-4 lg:px8  flex items-center gap-x-3 mb-8"> 

            <div className={cn("p-2 w-fit rounded-md", bgColor)}>
                <Icon  className={cn("w-10 h-10", IconColor)} />
            </div>
            <div > 
                <h2 className="text-3xl font-bold">  {title} </h2>

                <p className="text-sm text-muted-foreground">  {description }</p>
                 </div>
            </div>
            </>
        );

    };


    