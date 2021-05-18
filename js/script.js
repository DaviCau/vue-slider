var app = new Vue ({
    el: "#root",
    data: {
        img: [
            "https://www.sfondissimo.com/wp-content/gallery/sfondi-di-paesaggi/ca-wp1.jpg",
            "https://www.donnad.it/sites/default/files/styles/r_gallery_d/public/202107/sfondi-desktop-paesaggi-primaverili-gratis-11.jpg?itok=QsnIfRcn",
            "https://www.loversintheworld.it/wp-content/uploads/2017/05/sfondo-wallpaper-natura-paesaggi-1366-768-140.jpg",
            "https://www.sfondissimo.com/wp-content/gallery/sfondi-di-paesaggi/ca-wp6.jpg",
            "http://www.pixolo.it/wp-content/uploads/2012/11/amazing-sea-resort-1920x1200-wallpaper-1235.jpg"
        ],
        indexImg: 0,
    },
    methods: {
        indexIncrase: function() {
            this.indexImg++;
            if (this.indexImg == this.img.length) {
                this.indexImg = 0;
            }
        },
        indexDecrase: function() {
            this.indexImg--;
            if (this.indexImg == -1) {
                this.indexImg = this.img.length - 1;
            }
        }
    }
    
})