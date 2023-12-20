/*
1000rpm:33.6Nm/24.8lb-ft/3.5kW/4.8PS/4.7hp
1100rpm:38.2Nm/28.2lb-ft/4.4kW/6PS/5.9hp
1200rpm:42Nm/31lb-ft/5.3kW/7.2PS/7.1hp
1300rpm:45.2Nm/33.3lb-ft/6.2kW/8.4PS/8.2hp
1400rpm:48Nm/35.4lb-ft/7kW/9.6PS/9.4hp
1500rpm:50.4Nm/37.2lb-ft/7.9kW/10.8PS/10.6hp
1600rpm:52.5Nm/38.7lb-ft/8.8kW/12PS/11.8hp
1700rpm:54.4Nm/40.1lb-ft/9.7kW/13.2PS/13hp
1800rpm:56Nm/41.3lb-ft/10.6kW/14.4PS/14.1hp
1900rpm:57.5Nm/42.4lb-ft/11.4kW/15.6PS/15.3hp
2000rpm:58.8Nm/43.4lb-ft/12.3kW/16.7PS/16.5hp
2100rpm:60Nm/44.2lb-ft/13.2kW/17.9PS/17.7hp
2200rpm:61.1Nm/45.1lb-ft/14.1kW/19.1PS/18.9hp
2300rpm:62.1Nm/45.8lb-ft/15kW/20.3PS/20hp
2400rpm:63Nm/46.5lb-ft/15.8kW/21.5PS/21.2hp
2500rpm:63.8Nm/47.1lb-ft/16.7kW/22.7PS/22.4hp
2600rpm:64.6Nm/47.6lb-ft/17.6kW/23.9PS/23.6hp
2700rpm:65.3Nm/48.2lb-ft/18.5kW/25.1PS/24.7hp
2800rpm:66Nm/48.7lb-ft/19.4kW/26.3PS/25.9hp
2900rpm:66.6Nm/49.1lb-ft/20.2kW/27.5PS/27.1hp
3000rpm:67.2Nm/49.6lb-ft/21.1kW/28.7PS/28.3hp
3100rpm:67.7Nm/49.9lb-ft/22kW/29.9PS/29.5hp
3200rpm:68.2Nm/50.3lb-ft/22.9kW/31.1PS/30.6hp
3300rpm:68.7Nm/50.7lb-ft/23.7kW/32.3PS/31.8hp
3400rpm:69.2Nm/51lb-ft/24.6kW/33.5PS/33hp
3500rpm:69.6Nm/51.3lb-ft/25.5kW/34.7PS/34.2hp
3600rpm:69.6Nm/51.3lb-ft/26.2kW/35.7PS/35.2hp
3700rpm:69.5Nm/51.3lb-ft/26.9kW/36.6PS/36.1hp
3800rpm:69.4Nm/51.2lb-ft/27.6kW/37.6PS/37hp
3900rpm:69.3Nm/51.1lb-ft/28.3kW/38.5PS/37.9hp
4000rpm:69.1Nm/51lb-ft/28.9kW/39.4PS/38.8hp
4100rpm:68.9Nm/50.8lb-ft/29.6kW/40.2PS/39.6hp
4200rpm:68.6Nm/50.6lb-ft/30.2kW/41PS/40.4hp
4300rpm:68.3Nm/50.4lb-ft/30.8kW/41.8PS/41.2hp
4400rpm:67.9Nm/50.1lb-ft/31.3kW/42.6PS/41.9hp
4500rpm:67.5Nm/49.8lb-ft/31.8kW/43.3PS/42.6hp
4600rpm:67.1Nm/49.5lb-ft/32.3kW/44PS/43.3hp
4700rpm:66.6Nm/49.1lb-ft/32.8kW/44.6PS/43.9hp
4800rpm:66.1Nm/48.7lb-ft/33.2kW/45.2PS/44.5hp
4900rpm:65.6Nm/48.4lb-ft/33.7kW/45.8PS/45.1hp
5000rpm:65Nm/47.9lb-ft/34kW/46.3PS/45.6hp
5100rpm:64.3Nm/47.4lb-ft/34.3kW/46.7PS/46hp
5200rpm:63.7Nm/47lb-ft/34.7kW/47.2PS/46.5hp
5300rpm:62.9Nm/46.4lb-ft/34.9kW/47.5PS/46.8hp
5400rpm:62.2Nm/45.9lb-ft/35.2kW/47.8PS/47.1hp
5500rpm:61.4Nm/45.3lb-ft/35.4kW/48.1PS/47.4hp
5600rpm:60.5Nm/44.6lb-ft/35.5kW/48.3PS/47.6hp
5700rpm:59.2Nm/43.7lb-ft/35.3kW/48.1PS/47.4hp
5800rpm:57.5Nm/42.4lb-ft/34.9kW/47.5PS/46.8hp
5900rpm:55.4Nm/40.9lb-ft/34.2kW/46.6PS/45.9hp
6000rpm:52.9Nm/39lb-ft/33.2kW/45.2PS/44.5hp
6100rpm:50Nm/36.9lb-ft/31.9kW/43.4PS/42.8hp
*/

class torqueMeasure {
  constructor(rpm, nm, kw){
    this.rpm = rpm;
    this.torque = nm;
    this.power = kw;
  }
}

//rpm/Nm/kW
let torqueCurve=[
  new torqueMeasure(1000,0,3.5),
  new torqueMeasure(1100,38.2,4.4),
  new torqueMeasure(1200,42,5.3),
  new torqueMeasure(1300,45.2,6.2),
  new torqueMeasure(1400,48,7),
  new torqueMeasure(1500,50.4,7.9),
  new torqueMeasure(1600,52.5,8.8),
  new torqueMeasure(1700,54.4,9.7),
  new torqueMeasure(1800,56,10.6),
  new torqueMeasure(1900,57.5,11.4),
  new torqueMeasure(2000,58.8,12.3),
  new torqueMeasure(2100,60,13.2),
  new torqueMeasure(2200,61.1,14.1),
  new torqueMeasure(2300,62.1,15),
  new torqueMeasure(2400,63,15.8),
  new torqueMeasure(2500,63.8,16.7),
  new torqueMeasure(2600,64.6,17.6),
  new torqueMeasure(2700,65.3,18.5),
  new torqueMeasure(2800,66,19.4),
  new torqueMeasure(2900,66.6,20.2),
  new torqueMeasure(3000,67.2,21.1),
  new torqueMeasure(3100,67.7,22),
  new torqueMeasure(3200,68.2,22.9),
  new torqueMeasure(3300,68.7,23.7),
  new torqueMeasure(3400,69.2,24.6),
  new torqueMeasure(3500,69.6,25.5),
  new torqueMeasure(3600,69.6,26.2),
  new torqueMeasure(3700,69.5,26.9),
  new torqueMeasure(3800,69.4,27.6),
  new torqueMeasure(3900,69.3,28.3),
  new torqueMeasure(4000,69.1,28.9),
  new torqueMeasure(4100,68.9,29.6),
  new torqueMeasure(4200,68.6,30.2),
  new torqueMeasure(4300,68.3,30.8),
  new torqueMeasure(4400,67.9,31.3),
  new torqueMeasure(4500,67.5,31.8),
  new torqueMeasure(4600,67.1,32.3),
  new torqueMeasure(4700,66.6,32.8),
  new torqueMeasure(4800,66.1,33.2),
  new torqueMeasure(4900,65.6,33.7),
  new torqueMeasure(5000,65,34),
  new torqueMeasure(5100,64.3,34.3),
  new torqueMeasure(5200,63.7,34.7),
  new torqueMeasure(5300,62.9,34.9),
  new torqueMeasure(5400,62.2,35.2),
  new torqueMeasure(5500,61.4,35.4),
  new torqueMeasure(5600,60.5,35.5),
  new torqueMeasure(5700,59.2,35.3),
  new torqueMeasure(5800,57.5,34.9),
  new torqueMeasure(5900,55.4,34.2),
  new torqueMeasure(6000,52.9,33.2),
  new torqueMeasure(6100,50,31.9),
]

// max RPM = 6100, base RPM = 1000

function findTorque(rpm){
  // linear interpolation of the torque field
  
  if(rpm <= 1000) { return torqueCurve[0].torque }
  if(rpm >= 6100) { return torqueCurve[torqueCurve.length - 1].torque }
  
  let index = rpm - (rpm % 100)
      
  let leftIndex = floor(rpm / 1000) + floor(rpm / 100)
  let rightIndex = floor(rpm / 1000) + ceil(rpm / 100)
  
  // console.log(leftIndex + " " + rightIndex + "\n" + torqueCurve[leftIndex] + "\n")
      
  return (torqueCurve[leftIndex].torque + torqueCurve[rightIndex].torque) / 2
                                    
}

function findPower(rpm){
  // linear interpolation of the power field
  
  if(rpm < 1000) { return torqueCurve[0].Power }
  if(rpm > 6100) { return torqueCurve[torqueCurve.length - 1].Power }
      
  let leftIndex = floor(rpm / 1000) - 1
  let rightIndex = ceil(rpm / 1000) - 1
      
  return (torqueCurve[leftIndex].power + torqueCurve[rightIndex].power) / 2
                                    
}