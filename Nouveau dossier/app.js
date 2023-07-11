let app = new Vue({
    el: '#app',
    data: {
        message: 20,
        nom: 15,
        age: 19,
        metier: 17,
        mesNoteParSemestre: "Mes notes suivant les semestre sont les suivantes :",
        notes: [
            "premierSemestre: 17",
            "secondSemestre: 19",
            "troisiemeSemestre: 18",
            "quatriemeSemestre: 20",
            "cinquemeSemestre: 20"]
    }
});

let app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Vous avez affiché cette page le ' + new Date().toLocaleString()
    }
});

let app3 = new Vue({
    el: '#app-3',
    data: {
        seen : true
    }
})


var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Apprendre JavaScript' },
            { text: 'Apprendre Vue' },
            { text: 'Créer quelque chose de génial' }
        ]
    }
})
