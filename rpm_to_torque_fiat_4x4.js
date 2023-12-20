class torqueMeasure {
  constructor(rpm, nm, kw) {
    this.rpm = rpm;
    this.torque = nm;
    this.power = kw;
  }
}

//rpm/Nm/kW
let torqueTable = [
  [1000, 10.0, 3.5],
  [1100, 38.2, 4.4],
  [1200, 42, 5.3],
  [1300, 45.2, 6.2],
  [1400, 48, 7],
  [1500, 50.4, 7.9],
  [1600, 52.5, 8.8],
  [1700, 54.4, 9.7],
  [1800, 56, 10.6],
  [1900, 57.5, 11.4],
  [2000, 58.8, 12.3],
  [2100, 60, 13.2],
  [2200, 61.1, 14.1],
  [2300, 62.1, 15],
  [2400, 63, 15.8],
  [2500, 63.8, 16.7],
  [2600, 64.6, 17.6],
  [2700, 65.3, 18.5],
  [2800, 66, 19.4],
  [2900, 66.6, 20.2],
  [3000, 67.2, 21.1],
  [3100, 67.7, 22],
  [3200, 68.2, 22.9],
  [3300, 68.7, 23.7],
  [3400, 69.2, 24.6],
  [3500, 69.6, 25.5],
  [3600, 69.6, 26.2],
  [3700, 69.5, 26.9],
  [3800, 69.4, 27.6],
  [3900, 69.3, 28.3],
  [4000, 69.1, 28.9],
  [4100, 68.9, 29.6],
  [4200, 68.6, 30.2],
  [4300, 68.3, 30.8],
  [4400, 67.9, 31.3],
  [4500, 67.5, 31.8],
  [4600, 67.1, 32.3],
  [4700, 66.6, 32.8],
  [4800, 66.1, 33.2],
  [4900, 65.6, 33.7],
  [5000, 65, 34],
  [5100, 64.3, 34.3],
  [5200, 63.7, 34.7],
  [5300, 62.9, 34.9],
  [5400, 62.2, 35.2],
  [5500, 61.4, 35.4],
  [5600, 60.5, 35.5],
  [5700, 59.2, 35.3],
  [5800, 57.5, 34.9],
  [5900, 55.4, 34.2],
  [6000, 52.9, 33.2],
  [6100, 50, 31.9],
]

let torqueCurve = torqueTable.map(([rpm, nm, kw]) => { return new torqueMeasure(rpm, nm, kw) });

// max RPM = 6100, base RPM = 1000

function findTorque(rpm) {
  // linear interpolation of the torque field

  if (rpm <= 1000) { return torqueCurve[0].torque }
  if (rpm >= 6100) { return torqueCurve[torqueCurve.length - 1].torque }

  let index = (rpm - (rpm % 100)) / 100
  let leftIndex = ((index - index % 10) / 10 - 1) * 10 + index % 10
  let rightIndex = leftIndex + 1
  // console.log("leftIndex:" + leftIndex + " " + "rightIndex:" + rightIndex + "\n");
  return (torqueCurve[leftIndex].torque + torqueCurve[rightIndex].torque) / 2
}

function findPower(rpm) {
  // linear interpolation of the power field

  if (rpm < 1000) { return torqueCurve[0].Power }
  if (rpm > 6100) { return torqueCurve[torqueCurve.length - 1].Power }
  let leftIndex = floor(rpm / 1000) - 1
  let rightIndex = ceil(rpm / 1000) - 1
  return (torqueCurve[leftIndex].power + torqueCurve[rightIndex].power) / 2
}
