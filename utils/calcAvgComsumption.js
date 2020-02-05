const calculateAvgConsumption = data => {
  let refuellingList = [];
  Object.keys(data.refuellings).map(refuelling => {
    refuellingList.push({...data.refuellings[refuelling], id: refuelling});
  });

  //CALC AVG FUEL CONSUMPTION
  let refuellingfArray = [];
  let refuellingfArray2 = {};
  refuellingList.reverse().forEach((refuelling, index) => {
    let kmsLastRef = null;
    let kmsLastFullRef = null;
    let refueledLiters = 0;
    let avgFuelConsumption = '-';
    let loopCounter = 1;

    let loopActive = true;

    if (refuellingList.length === index + 1) {
      avgFuelConsumption = '-';
    }

    if (refuellingList[index + 1] !== undefined) {
      kmsLastRef =
        Number(refuelling.mileage) - Number(refuellingList[index + 1].mileage);

      if (refuelling.fullRefuelling === true) {
        if (refuellingList[index + 1].fullRefuelling === true) {
          kmsLastFullRef =
            Number(refuelling.mileage) -
            Number(refuellingList[index + 1].mileage);
          refueledLiters = Number(refuelling.liters);
          avgFuelConsumption = (
            (refueledLiters / kmsLastFullRef) *
            100
          ).toFixed(2);
        } else {
          kmsLastFullRef +=
            refuellingList[index].mileage - refuellingList[index + 1].mileage;
          refueledLiters += Number(refuellingList[index].liters);
          while (loopActive) {
            if (refuellingList[index + loopCounter].fullRefuelling === false) {
              kmsLastFullRef +=
                Number(refuellingList[index + loopCounter].mileage) -
                Number(refuellingList[index + (loopCounter + 1)].mileage);
              refueledLiters += Number(
                refuellingList[index + loopCounter].liters,
              );
              loopCounter++;
            } else {
              loopActive = false;
              avgFuelConsumption = (
                (refueledLiters / kmsLastFullRef) *
                100
              ).toFixed(2);
            }
          }
        }
      }
    }

    refuellingfArray.push(avgFuelConsumption);

    refuellingfArray.forEach((item, index) => {
      if (item === '-' && index > 0 && index < refuellingList.length - 1) {
        refuellingfArray[index] = refuellingfArray[index - 1];
      }
    });

    if (refuelling.fullRefuelling === false && index > 0) {
      avgFuelConsumption = refuellingfArray[index - 1];
    }

    refuellingfArray2 = {
      ...refuellingfArray2,
      [refuelling.id]: {
        avg: refuellingfArray[index],
        fullRefuelling: refuelling.fullRefuelling,
        date: refuelling.date,
        amount: refuelling.amount,
        liters: refuelling.liters,
        mileage: refuelling.mileage,
        priceLiter: refuelling.priceLiter,
        kmsLastFullRef,
        kmsLastRef,
      },
    };
  });
  return {refuellings: {...refuellingfArray2}, services: {...data.services}};
};

export default calculateAvgConsumption;
