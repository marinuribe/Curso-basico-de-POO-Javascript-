class Course {
    constructor({
        name,
        classes = [],
    }){
        this.name = name;
        this.classes = classes
    }
}

const basicProgramming = new Course({
    name: 'Curso de programacion basica',
    classes: ['clase1', 'clase2', 'clase3'],
})
const cssHtmlCourse = new Course({
    name: 'Curso definitvo de CSS y HTML',
    classes: ['clase1', 'clase2', 'clase3'],
})
const javascriptCourse = new Course({
    name: 'Curso practico de Javascript',
    classes: ['clase1', 'clase2', 'clase3'],
})
const DataScience = new Course({
    name: 'Curso de introduccion a la ciencia de datos',
    classes: ['clase1', 'clase2', 'clase3'],
})
const pythonCourse = new Course({
    name: 'Curso de python',
    classes: ['clase1', 'clase2', 'clase3'],
})
const premiereCourse = new Course({
    name: 'Curso de adobe premiere',
    classes: ['clase1', 'clase2', 'clase3'],
})
const illustratorCourse = new Course({
    name: 'Curso de adobe illustratos',
    classes: ['clase1', 'clase2', 'clase3'],
})

class LearningPath {
    constructor({
        courses = [],
        name,
    }){
        this.courses = courses;
        this.name = name;
    }
}

const webDevelopment = new LearningPath({
    name: 'Web development school',
    courses: [
        basicProgramming,
        cssHtmlCourse,
        javascriptCourse,
    ],
})
const dataScience = new LearningPath({
    name: 'Data science school',
    courses: [
        basicProgramming,
        DataScience,
        pythonCourse,
    ],
})
const videoEdition = new LearningPath({
    name: 'Video edition school',
    courses: [
        basicProgramming,
        premiereCourse,
        illustratorCourse,
    ]
})

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined, // This is a defoult value
        instagram = undefined,
        faceboock = undefined,
        aprovedCourses = [],
        learningPaths = [],
    }){
        this.name = name
        this.email = email
        this.username = username
        this.socialMedia = {
            twitter: twitter,
            faceboock: faceboock,
            instagram: instagram,
        }
        this.aprovedCourses = aprovedCourses
        this.learningPaths = learningPaths
    }
}

const victor = new Student({
    name: 'Victor',
    username: 'victormarinu',
    email: 'marinuribe01@gmail.com',
    twitter: 'victorm4rinu',
    learningPaths: [webDevelopment, videoEdition]
})
const valentina = new Student({
    name: 'Valentina',
    username: 'Mesavargas',
    email: 'valentina1999@gmail.com',
    twitter: 'valen1218',
    learningPaths: [webDevelopment, dataScience]
})