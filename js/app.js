/*Customize lightbo*/

lightbox.option({
'showImageNumberLabel': false
});


/*Do basic search of images*/

function searchPhotos() {

  const input = document.getElementById('search-gallery');
  const gallery = document.getElementById("gallery");
  let filter = input.value.toUpperCase();

  let galleryItem = gallery.getElementsByTagName('div');

  let i;
  for (i = 0; i < galleryItem.length; i++) {
    let a = galleryItem[i].getElementsByTagName("a")[0];

    let txtValue = a.getAttribute("data-title") || a.getAttribute("data-name");

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      galleryItem[i].style.display = "";
    } else {
      galleryItem[i].style.display = "none";
    }
  }
}
