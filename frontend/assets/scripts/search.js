const clubButtons = [
  {
    name: 'gambling and compulsions club',
    desc: 'its adicting',
    html: '<a href="/clubs/gambling/gambling_home.html"><div class="club"><img src="/clubs/gambling/gambling.jfif"><div class="desc"><h2>Gambling and Compulsions Club</h2><span>Desc of gambling club ...</span></div></div></a>'
  },
  {
    name: 'fishing club',
    desc: 'fish time',
    html: '<a href="/clubs/fishing_home.html"><div class="club"><img src="/clubs/fishing.webp"><div class="desc"><h2>Fishing Club</h2><span>Desc of fishing club ...</span></div></div></a>'
  },
  {
    name: 'society of software engineering',
    desc: 'sse',
    html: '<a href="/clubs/sse_home.html"><div class="club"><img src="/clubs/sse.png"><div class="desc"><h2>Society of Software Engineering</h2><span>Desc of SSE ...</span></div></div></a>'
  }
];

const defaultResponse = '<h3 class="infoText">Start typing letters to search</h3>';
const noButtonsFoundResponse = '<h3 class="infoText">Sorry, no clubs could be found with those keywords</h3>';


$('.resultsHolder').html(defaultResponse);

$('.searchBar').val('');

$('.searchBar').on('keyup', function(e) {
  const input = $(this).val().toLowerCase();
  console.log(input);
  if(input === '') {
    $('.resultsHolder').html(defaultResponse);
  } else {
    let buttonFound = false;
    for(const club of clubButtons) {
      if(club.name.toLowerCase().includes(input) || club.desc.toLowerCase().includes(input)) {
        if(!buttonFound) {
          $('.resultsHolder').html('');
          buttonFound = true;
        }
        $('.resultsHolder').append(club.html);
      }
    }

    if(!buttonFound) {
      $('.resultsHolder').html(noButtonsFoundResponse);
    } 
  }
});