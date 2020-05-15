const courseInfo = {
    name: 'Code 301',
    duration: { dayTrack: '4 weeks', eveningTrack: '8 weeks' },
    topics: ['SMACSS', 'APIs', 'NodeJS', 'SQL', 'jQuery', 'functional programming'],
    finalExam: true
};

let fun = (obj) => {

    let prop = Object.keys(obj).forEach((val) => {
        return val
    })

    console.log(prop);

}

fun(courseInfo)