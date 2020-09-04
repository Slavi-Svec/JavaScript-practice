
    const iconList = weather.list

    for (let i = 0; i < iconList.length; i = i + 8) {
      let icon = weather.list[0].weather[0].icon

      const iconUrl = 'http://openweathermap.org/img/w/' + icon + '.png'
      fiveIconDiv.src = iconUrl

      const iconFiveDay = [iconUrl]

      iconFiveDay.forEach(function(iconFiveDay ) {
        let src = document.createElement('src')
        src.textContent = iconFiveDay
        fragmentTwo.appendChild(src)

        })
        fiveIconDiv.appendChild(fragmentTwo)





          // const iconList = weather.list

    // for (let i = 0; i < iconList.length; i = i + 8) {
    //   let icon = weather.list[0].weather[0].icon

    //   const iconUrl = 'http://openweathermap.org/img/w/' + icon + '.png'
    //   fiveIconDiv.src = iconUrl

    //   const iconFiveDay = [iconUrl]

    //   iconFiveDay.forEach(function(iconFiveDay ) {
    //     let src = document.createElement('src')
    //     src.textContent = iconFiveDay
    //     fragmentTwo.appendChild(src)

    //     })
    //     fiveIconDiv.appendChild(fragmentTwo)

    // }



    //   weatherFiveDay.forEach(function(weatherFiveDay) {
    //   let li = document.createElement('li')
    //   li.textContent = weatherFiveDay
    //   fragment.appendChild(li)
    //   })

    //   fiveIconDiv.appendChild(fragment)

    // }

    // const iconUrl = 'http://openweathermap.org/img/w/' + icon + '.png'
    // iconImg.src = iconUrl




      // const location = weather.name
      // const temp = Math.round(weather.main.temp)
      // const tempMin = weather.main.temp_min
      // const tempMax = weather.main.temp_max
      // const iconCode = weather.weather[0].icon
      // const iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png'


      // locationDiv.textContent = location
      // weatherDiv.textContent = temp
      // iconImg.src = iconUrl

      // console.log(temp)
      // console.log(iconCode)
      // console.log(tempMin, tempMax)
      // console.log(weather)