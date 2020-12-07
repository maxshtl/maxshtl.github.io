function loadCharacters(xml) {
    const $characters = $(xml).find('character');
    const $charactersList = $('#charactersList');

    $characters.each(function(index){
        const id = $(this).attr('id');
        const name = $(this).find('name').text();
        const shortName = $(this).find('shortName').text();
        const icon = $(this).find('icon').text();

        if ($(document).innerWidth < $(document).innerHeight && index % 2 === 0) {
            $charactersList.append('<ul class="character-list"></ul>');
        }
        else if ($(document).innerWidth > $(document).innerHeight && index % 4 === 0) {
            $charactersList.append('<ul class="character-list"></ul>');
        }
        const namePart = name.split(' ');

        $(".character-list:last-child")
            .append('<li>' +
                '<a href="#'+ id + '">' +
                '<img src="' + icon + '" alt="' + shortName + '">' +
                '<div>' + namePart[0] + (namePart.length > 1 ? '<br/>' + namePart[1] : '') + '</div>' +
                '</a>' +
                '</li>')
    });
}

function loadMainCharacter(characterName, xml) {
    const charactersLength = $(xml).find('character').length - 1;
    const $character = $(xml).find('character[id="' + characterName + '"]');
    const order = parseInt($character.attr('order'));
    const name = $character.find('name').text();
    const shortName = $character.find('shortName').text();
    const description = $character.find('description').text();
    const image = $character.find('image').text();
    const prevCharacter = order === 0 ?
        $(xml).find('character[order="' + (charactersLength) + '"]') :
        $(xml).find('character[order="' + (order - 1) + '"]');
    const nextCharacter = order === charactersLength ?
        $(xml).find('character[order="0"]') :
        $(xml).find('character[order="' + (order + 1) + '"]');

    $('#characterName').text(name);
    $('#characterDescription').text(description);
    $('#characterShortName').text(shortName);
    $('#characterImageContainer').html('<img src="' + image + '" alt="' + shortName +'">');
    $('#prevCharacter').attr('href', '#' + prevCharacter.attr('id'));
    $('#nextCharacter').attr('href', '#' + nextCharacter.attr('id'));
}

function loadXmlFile() {
    const hash = window.location.hash.substr(1);
    $.ajax({
        type: "GET" ,
        url: "xml/characters.xml" ,
        dataType: "xml" ,
        success: function (xml) {
            loadCharacters(xml);
            loadMainCharacter(hash ? hash : 'mob', xml);
            subscribe(xml);
        }
    });
}

function subscribe(xml) {
    window.onpopstate = function () {
        const hash = window.location.hash.substr(1);
        loadMainCharacter(hash, xml);
    }
}

$(document).ready(loadXmlFile);