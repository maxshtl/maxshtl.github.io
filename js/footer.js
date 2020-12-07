function loadXmlFile() {
    $.ajax({
        type: "GET" ,
        url: "xml/footer.xml" ,
        dataType: "xml" ,
        success: function (xml) {
            loadFooter(xml);
        }
    });
}

function loadFooter(xml) {
    const $author = $(xml).find('author');
    const $anime = $(xml).find('anime');
    const authorName = $author.find('name').text();
    const authorUniversity = $author.find('university').text();
    const authorCourse = $author.find('course').text();
    const authorFaculty = $author.find('faculty').text();
    const authorGroup = $author.find('group').text();
    const authorCity = $author.find('city').text();
    const authorYear = $author.find('year').text();
    const animeName = $anime.find('title').text();
    const animeStudio = $anime.find('studio').text();
    const animeCity = $anime.find('city').text();
    const animeYear = $anime.find('year').text();

    $(".footer").html('<div class="container">' +
        '<div class="my-info">' +
        authorName + '<br>' +
        authorUniversity + ' ' + authorCourse + ' ' + authorFaculty + ' ' + authorGroup + '<br>' +
        authorCity + ' ' + authorYear +
        '</div>' +
        '<div class="mob-info">' +
        animeName + '<br>' +
        animeStudio + '<br>' +
        animeCity + ' ' + animeYear +
        '</div>' +
        '</div>')
}

$(document).ready(loadXmlFile);