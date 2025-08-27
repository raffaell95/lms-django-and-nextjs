"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import { useMarkLessonAsWatched } from "@/lib-example/mutations"
import { useGetCourseContent } from "@/lib-example/queries"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import {OnProgressProps} from 'react-player/base'
import { string } from "zod"
import { cn } from "@/lib-example/utils"


type Props = {
    course: Course
}

export const CourseLearnPage = ({ course }: Props) => {
    const [lesson, setLesson] = useState<CourseLesson | null>(null)
    const [sidebarCollaped, setSidebarCollapsed] = useState(false)

    const isMobile = useIsMobile()

    const {data: courseContent, refetch: refetshCourseContent } = useGetCourseContent(course.id)
    const {mutateAsync: markLessonAsWatched, isPending: markLessonAsWatchedIsPending} = useMarkLessonAsWatched()

    const markLessonAsCompleted = async (notify: boolean = true) => {
        if(!lesson) return
        const response = await markLessonAsWatched(lesson.id)

        if(!response.success){
            if(notify){
                toast.error("Erro ao marcar aula como concluida", {
                    description: response.detail
                })
            }
            return
        }

        await refetshCourseContent()

        if(notify){
            toast.success("Aula marcada como concluida!", {
                description: "Seu progresso foi atualizado!"
            })
        }
    }

    const handleOnProgress = (progress: OnProgressProps) => {
        if(!lesson || markLessonAsWatchedIsPending || lesson.is_watched) return
        if (progress.played >= 0.8) markLessonAsCompleted(false)
    }

    useEffect(() => {
        if(courseContent?.data && courseContent.data.modules.length > 0){
            const firstModule = courseContent.data.modules[0]
            const firstLesson = firstModule.lessons[0]
            setLesson(firstLesson)
        }
    }, [courseContent])

    useEffect(() => {
        if(!courseContent?.data || !lesson) return
        setLesson(courseContent.data.modules.flatMap((module) => module.lessons).find(l => l.id === lesson.id) || null)
    }, [courseContent])

    const CourseModules = ({className}: {className?: string}) => (
        <div className={cn("w-fill transition-all duration-300 bg-background overflow-hidden", className)}>
            <div className="p-4 border-b">
                <div>
                    <h2 className="font-semibold text-lg truncate">{course.title}</h2>
                    <p className="text-sm text-muted-foreground">Progresso: {Math.round(courseContent?.data?.progress || 0)}</p>
                </div>
                
            </div>
        </div>
    )
}