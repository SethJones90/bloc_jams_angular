(function (){
    function AlbumCtrl() {
        this.albumData = albumPicasso;
        console.log(this.albumData);
    }
    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();
