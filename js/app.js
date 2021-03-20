'Strict'



var AllItemsImages = [];
var FirstImage = document.getElementById('First');
var SecondImage = document.getElementById('Second');
var ThirdImage = document.getElementById('Third');
var ItemsImagesDiv = document.getElementById('ItemsImagesDiv');

var DefaultRoundsNumber = 25;
var TotalClicks = 0;

var FirstImageIndex ;
var SecondImageIndex ;
var ThirdImageIndex ;

function ItemImages(name,source){
    this.name = name;
    this.source = source;
    this.ImagesClicks = 0;
    this.ImagesShown = 0;

    AllItemsImages.push(this);
  }

 
  RoundsNumberForm.addEventListener('submit', AddRoundNum);

  function AddRoundNum(event)
  {
      event.preventDefault();
     
     DefaultRoundsNumber = parseInt(event.target.RoundsNum.value) -1 ;
     return  DefaultRoundsNumber;
     
  }

  
 

new ItemImages('bag', 'img/bag.jpg');
new ItemImages('banana', 'img/banana.jpg');
new ItemImages('bathroom', 'img/bathroom.jpg');
new ItemImages('boots', 'img/boots.jpg');
new ItemImages('breakfast', 'img/breakfast.jpg');
new ItemImages('bubblegum', 'img/bubblegum.jpg');
new ItemImages('chair', 'img/chair.jpg');
new ItemImages('cthulhu', 'img/cthulhu.jpg');
new ItemImages('dog-duck', 'img/dog-duck.jpg');
new ItemImages('pen', 'img/pen.jpg');
new ItemImages('pet-sweep', 'img/pet-sweep.jpg');
new ItemImages('scissors', 'img/scissors.jpg');
new ItemImages('shark', 'img/shark.jpg');
new ItemImages('sweep', 'img/sweep.png');
new ItemImages('tauntaun', 'img/tauntaun.jpg');
new ItemImages('unicorn', 'img/unicorn.jpg');
new ItemImages('usb', 'img/usb.gif');
new ItemImages('water-can', 'img/water-can.jpg');
new ItemImages('wine-glass', 'img/wine-glass.jpg');

console.log(AllItemsImages);

renderThreeRandomImages();

FirstImage.addEventListener('click',handleUserClick);
SecondImage.addEventListener('click',handleUserClick);
ThirdImage.addEventListener('click',handleUserClick);

function generateRandomIndex(){
    return Math.floor(Math.random() * (AllItemsImages.length));

  }

function renderThreeRandomImages()
{
    FirstImageIndex = generateRandomIndex();

    do{
    SecondImageIndex = generateRandomIndex();
    ThirdImageIndex = generateRandomIndex();
    }

    while (FirstImageIndex === SecondImageIndex || FirstImageIndex === ThirdImageIndex || SecondImageIndex === ThirdImageIndex)
    {
        AllItemsImages[FirstImageIndex].ImagesShown++;
        FirstImage.src = AllItemsImages[FirstImageIndex].source;
        AllItemsImages[SecondImageIndex].ImagesShown++;
        SecondImage.src = AllItemsImages[SecondImageIndex].source;
        AllItemsImages[ThirdImageIndex].ImagesShown++;
        ThirdImage.src = AllItemsImages[ThirdImageIndex].source;
    }
}



function handleUserClick(event)
{
    

    if(TotalClicks <= DefaultRoundsNumber)
    {
        if(event.target.id === 'First'){
            AllItemsImages[FirstImageIndex].ImagesClicks++;
            TotalClicks++;
          }
        else if(event.target.id === 'Second'){
            AllItemsImages[FirstImageIndex].ImagesClicks++;
            TotalClicks++;
        }
        else if(event.target.id === 'Third'){
                AllItemsImages[FirstImageIndex].ImagesClicks++;
                TotalClicks++;
        }

        renderThreeRandomImages();

    }

    else
    {
        ItemsImagesDiv.removeEventListener('click' ,handleUserClick );
        ResultButton.disabled = false;
        
    }


}

  var ResultButton = document.getElementById('SubmitResult');
  ResultButton.addEventListener('click', GoalResult);

function GoalResult()
{
    var ResultItemsList = document.getElementById('ResultItemsList');
    var goalResult;
    for (var i = 0; i < AllItemsImages.length; i++) {
        
        goalResult = document.createElement('li');
        goalResult.textContent =  AllItemsImages[i].name + ' had '+  AllItemsImages[i].ImagesClicks + ' votes, and was seen ' + AllItemsImages[i].ImagesShown ;
        ResultItemsList.appendChild(goalResult);
    }


    FirstImage.removeEventListener('click',handleUserClick);
    SecondImage.removeEventListener('click',handleUserClick);
    ThirdImage.removeEventListener('click',handleUserClick);

    ResultButton.disabled = true;
}






