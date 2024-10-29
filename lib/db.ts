import { prisma } from '@/lib/prisma'
import redisClinet from '@/lib/redisClient'

export const getAllCourses = async () => {
    const cacheKey = 'courses'
    const cachedCourses = await redisClinet.get(cacheKey)
    if (cachedCourses) {
        return JSON.parse(cachedCourses)
    }
    const courses = await prisma.course.findMany()
    await redisClinet.setEx(cacheKey, 3600, JSON.stringify(courses))
    
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
                    courseId: id,
                }
            },
            type: "folder"
        }
    })
    return content
}

export const getPurchases = async (userId: number) => {
    const purchases = await prisma.userPurchases.findMany({
        where: {
            userId: userId
        },
        select: {
            course: true
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

export const getCourseContent = async (courseId: number) => {
    const content = await prisma.courseContent.findMany({
        where: {
            courseId
        },
        include: {
            content: {
                include: {
                    children: true,
                    parent: true,
                    VideoMetaData: true,
                    NotionMetaData: true,
                }
            },
            course: true
        }
    })
    return content
}

export const getContentDetails = async(contentId: number) => {
    const content = await prisma.content.findUnique({
        where: {
            id: contentId
        },
        include: {
            children: true,
            parent: true,
            VideoMetaData: true,
            NotionMetaData: true
        }
    })
    return content
}