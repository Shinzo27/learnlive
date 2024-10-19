import { prisma } from '@/lib/prisma'

export const getAllCourses = async () => {
    const courses = await prisma.course.findMany()
    return courses
}

export const checkIfUserExists = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    return user
}

export const getCourseById = async (id: number) => {
    const course = await prisma.course.findUnique({
        where: {
            id: id
        }
    })
    return course
}

export const getContentOfCourse = async (id: number) => {
    const content = await prisma.content.findMany({
        where: {
            courses: {
                some: {
                    courseId: id
                }
            }
        }
    })
    return content
}

export const getPurchases = async () => {
    const purchases = await prisma.userPurchases.findMany({
        include: {
            user: true
        }
    })
    return purchases
}

