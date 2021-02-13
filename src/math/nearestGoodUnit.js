

      let nearestGoodUnit = function (v) {

        // Figure out the nearest power of 10.
        let units = Math.floor(Math.log10(v)) - 1;
        units = Math.max(1, units);
        let unitsInPowersOfTen = Math.pow(10, units);

        return Math.ceil(v / unitsInPowersOfTen) *
            unitsInPowersOfTen;
      }

      lastValue.maxYUpper = Math.max(lastValue.maxYUpper,
          nearestGoodUnit(valueForYAxisUpper));

      lastValue.maxYLower = Math.max(lastValue.maxYLower,
          nearestGoodUnit(currentValue.raster || 0));

      return lastValue;

    }
