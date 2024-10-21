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

export const checkIfCoursePurchased = async (courseId: number, userId: number) => {
    const purchase = await prisma.userPurchases.findFirst({
        where: {
            courseId: courseId,
            userId: userId
        }
    })
    return purchase
}

export const checkIfNumberExists = async (number: string, courseId: number) => {
    const user = await prisma.user.findFirst({
        where: {
            number: parseInt(number),
            purchases: {
                some: {
                    courseId: courseId
                }
            }
        }
    })
    return user
}

export const getUserDetails = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    return user
}

export const createPurchase = async (courseId: number, userId: number) => {
    const purchase = await prisma.userPurchases.create({
        data: {
            courseId: courseId,
            userId: userId
        }
    })
    return purchase
}