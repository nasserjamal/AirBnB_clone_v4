amenities = new Map();

$('input').change(checkboxChanged);

function checkboxChanged(){
    if (this.checked)
        amenities.set($(this).attr("data-id"), $(this).attr("data-name"));
    else{
        amenities.delete($(this).attr("data-id"));
    }

    $(".amenities h4").text(Array.from(amenities.values()));
}
