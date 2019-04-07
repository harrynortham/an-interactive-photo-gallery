/*Customize lightbo*/

lightbox.option({
'showImageNumberLabel': false
})


/*Do basic search of images*/

function searchPhotos() {

  var input = document.getElementById('search-gallery');
  var filter = input.value.toUpperCase();
  var gallery = document.getElementById("gallery");

  var galleryItem = gallery.getElementsByTagName('div');

  for (i = 0; i < galleryItem.length; i++) {
    a = galleryItem[i].getElementsByTagName("a")[0];

    txtValue = a.getAttribute("data-title") || a.getAttribute("data-name");

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      galleryItem[i].style.display = "";
    } else {
      galleryItem[i].style.display = "none";
    }
  }
}
