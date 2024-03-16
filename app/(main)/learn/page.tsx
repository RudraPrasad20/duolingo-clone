import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { title } from "process";

export default function LearnPage (){
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
               
                <UserProgress 
                activeCourse={{title: "hindi", imageSrc: "/es.svg"}}
                hearts={5}
                points={100}
               hasActiveSubscription={false}
                />
            </StickyWrapper>
            <FeedWrapper>
                
                <Header title="Hindi"/>
            </FeedWrapper>
        </div>
    )
}