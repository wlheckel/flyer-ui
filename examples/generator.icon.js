const fs = require('fs')
let data = `
fly-icon-activity

fly-icon-airplay

fly-icon-alert-circle

fly-icon-align-center

fly-icon-align-justify

fly-icon-align-left

fly-icon-align-right

fly-icon-anchor

fly-icon-archive

fly-icon-arrow-down

fly-icon-arrow-left

fly-icon-arrow-right

fly-icon-arrow-up

fly-icon-at-sign

fly-icon-award

fly-icon-bar-chart

fly-icon-bar-chart-2

fly-icon-battery

fly-icon-battery-charging

fly-icon-bell

fly-icon-bell-off

fly-icon-bluetooth

fly-icon-bold

fly-icon-check

fly-icon-chevron-down

fly-icon-chevron-left

fly-icon-chevron-right

fly-icon-chevron-up

fly-icon-chevrons-down

fly-icon-chevrons-left

fly-icon-chevrons-right

fly-icon-chevrons-up

fly-icon-chrome

fly-icon-clock

fly-icon-cloud

fly-icon-command

fly-icon-credit-card

fly-icon-dollar-sign

fly-icon-file

fly-icon-file-minus

fly-icon-file-plus

fly-icon-file-text

fly-icon-flag

fly-icon-folder

fly-icon-folder-minus

fly-icon-folder-plus

fly-icon-github

fly-icon-heart

fly-icon-help-circle

fly-icon-image

fly-icon-info

fly-icon-loader

fly-icon-mail

fly-icon-map-pin

fly-icon-minus

fly-icon-monitor

fly-icon-more-horizontal

fly-icon-more-vertical

fly-icon-move

fly-icon-paperclip

fly-icon-pause

fly-icon-plus

`

let items = data.split(/[\s\n]/ig).filter((item) => {
  return item.length > 0
})
fs.writeFileSync('examples/icon.json', JSON.stringify(items))
