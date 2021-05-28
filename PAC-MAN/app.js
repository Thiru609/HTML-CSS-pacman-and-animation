document.addEventListener('DOMContentLoaded', () => {

  const scoreDisplay = document.getElementById('score')
  const width = 28
  let score = 0
  const grid = document.querySelector('.grid')
  const layout = [    //map a layout copied from default game layouts online
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
  ]
  // 0 - DAs
  // 1 - grass
  // 2 - Anna Residency
  // 3 - Cousin pellet
  // 4 - empty

  const squares = []

  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement('div')
      grid.appendChild(square)
      squares.push(square)
      if(layout[i] === 0) {
        squares[i].classList.add('DAs')
      } else if (layout[i] === 1) {
        squares[i].classList.add('grass')
      } else if (layout[i] === 2) {
        squares[i].classList.add('Anna-Residency')
      } else if (layout[i] === 3) {
        squares[i].classList.add('Cousin-pellet')
      }
    }
  }
  createBoard()
let StudCurIndex = 490
  squares[StudCurIndex].classList.add('Student')
 function movestud(e) {
    squares[StudCurIndex].classList.remove('Student')
    switch(e.keyCode) {
      case 37:
        if(
          StudCurIndex % width !== 0 &&
          !squares[StudCurIndex -1].classList.contains('grass') &&
          !squares[StudCurIndex -1].classList.contains('Anna-Residency')
          )
          StudCurIndex -= 1
        if (squares[StudCurIndex -1] === squares[363]) {
          StudCurIndex = 391
        }
        break
      case 38:
        if(
          StudCurIndex - width >= 0 &&
          !squares[StudCurIndex -width].classList.contains('grass') &&
          !squares[StudCurIndex -width].classList.contains('Anna-Residency')
          ) 
          StudCurIndex -= width
        break
      case 39:
        if(
          StudCurIndex % width < width - 1 &&
          !squares[StudCurIndex +1].classList.contains('grass') &&
          !squares[StudCurIndex +1].classList.contains('Anna-Residency')
        )
        StudCurIndex += 1
        if (squares[StudCurIndex +1] === squares[392]) {
          StudCurIndex = 364
        }
        break
      case 40:
        if (
          StudCurIndex + width < width * width &&
          !squares[StudCurIndex +width].classList.contains('grass') &&
          !squares[StudCurIndex +width].classList.contains('Anna-Residency')
        )
        StudCurIndex += width
        break
    }
    squares[StudCurIndex].classList.add('Student')
    DACompleted()
    CousinPellet()
    checkForGameOver()
    checkForWin()
  }
  document.addEventListener('keyup', movestud)

  function DACompleted() {
    if (squares[StudCurIndex].classList.contains('DAs')) {
      score++
      scoreDisplay.innerHTML = score
      squares[StudCurIndex].classList.remove('DAs')
    }
  }
  function CousinPellet() {
    if (squares[StudCurIndex].classList.contains('Cousin-pellet')) {
      score +=10
      Redtags.forEach(Redtag => Redtag.tamilmagic = true)
      setTimeout(Ritualizeanna, 10000)
      squares[StudCurIndex].classList.remove('Cousin-pellet')
	   alert("Bhaiya no bhaiya, leave me bhaiya, hindi not know bhaiya");
    }
  }
  function Ritualizeanna() {
    Redtags.forEach(Redtag => Redtag.tamilmagic = false)
  }

  class Redtag {
    constructor(className, startIndex, speed) {
      this.className = className
      this.startIndex = startIndex
      this.speed = speed
      this.currentIndex = startIndex
      this.tamilmagic = false
      this.timerId = NaN
    }
  }


  Redtags = [
    new Redtag('buban', 348, 1000),
    new Redtag('bhaiya', 376, 400),
    new Redtag('ppman', 351, 300),
    new Redtag('grasscrawler', 379, 200)
    ]


  Redtags.forEach(Redtag => {
    squares[Redtag.currentIndex].classList.add(Redtag.className)
    squares[Redtag.currentIndex].classList.add('Redtag')
    })

 
  Redtags.forEach(Redtag => moveRedtag(Redtag))

  function moveRedtag(Redtag) {
    const directions =  [-1, +1, width, -width]
    let direction = directions[Math.floor(Math.random() * directions.length)]

    Redtag.timerId = setInterval(function() {
     
      if  (!squares[Redtag.currentIndex + direction].classList.contains('Redtag') &&
        !squares[Redtag.currentIndex + direction].classList.contains('grass') ) {
          squares[Redtag.currentIndex].classList.remove(Redtag.className)
          squares[Redtag.currentIndex].classList.remove('Redtag', 'magic-Redtag')
          Redtag.currentIndex += direction
          squares[Redtag.currentIndex].classList.add(Redtag.className, 'Redtag')
      
      } else direction = directions[Math.floor(Math.random() * directions.length)]

     
      if (Redtag.tamilmagic) {
        squares[Redtag.currentIndex].classList.add('magic-Redtag')
      }

     
      if(Redtag.tamilmagic && squares[Redtag.currentIndex].classList.contains('Student')) {
        squares[Redtag.currentIndex].classList.remove(Redtag.className, 'Redtag', 'magic-Redtag')
        Redtag.currentIndex = Redtag.startIndex
        score +=100
        squares[Redtag.currentIndex].classList.add(Redtag.className, 'Redtag')
      }
    checkForGameOver()
    }, Redtag.speed)
  }

  
  function checkForGameOver() {
    if (squares[StudCurIndex].classList.contains('Redtag') &&
      !squares[StudCurIndex].classList.contains('magic-Redtag')) {
      Redtags.forEach(Redtag => clearInterval(Redtag.timerId))
      document.removeEventListener('keyup', movestud)
      setTimeout(function(){ alert("Pink Slip ma, you are mentally disturbed"); }, 500)
    }
  }

 
  function checkForWin() {
    if (score === 274) {
      Redtags.forEach(Redtag => clearInterval(Redtag.timerId))
      document.removeEventListener('keyup',movestud)
      setTimeout(function(){ alert("You have escaped the annas"); }, 500)
    }
  }
})