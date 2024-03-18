const FadeIn = {
    hidden:{
        x: -50,
        opacity: 0
    },
    visible:{
        x: 0,
        opacity: 1,
        transition:{
            type: 'spring',
            delay: 0.2,
            duration: 1.7
        }
    }
}

const FadeInReverse = {
    hidden:{
        x: 50,
        opacity: 0
    },
    visible:{
        x: 0,
        opacity: 1,
        transition:{
            type: 'spring',
            delay: 0.2,
            duration: 1.7
        }
    }
}

const OpacityIn = {
    hidden:{
        opacity: 0
    },
    visible:{
        opacity: 1,
        transition:{
            delay: 0.2,
            duration: 1.7
        }
    }
}

module.exports = {
    FadeIn,
    FadeInReverse,
    OpacityIn,
}