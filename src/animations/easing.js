########################
### Easing functions ###
########################
# http://easings.net/en


### Back Easing ###

export backIn    = (t, overshoot=1.70158) -> t*t*((overshoot+1)*t - overshoot)
export backOut   = (t, overshoot=1.70158) -> ((t=t-1)*t*((overshoot+1)*t + overshoot) + 1)
export backInOut = (t, overshoot=1.70158) -> if ((t = t*2) < 1) then (t*t*(((overshoot*=(1.525))+1)*t - overshoot))/2 else ((t-=2)*t*(((overshoot*=(1.525))+1)*t + overshoot) + 2)/2


### Bounce Easing ###

export bounceOut = (t) ->
    if      t < 1/2.75   then (7.5625*t*t)
    else if t < 2/2.75   then (7.5625*(t -= (1.5/2.75)) * t + 0.75)
    else if t < 2.5/2.75 then (7.5625*(t -= (2.25/2.75)) * t + 0.9375)
    else                      (7.5625*(t -= (2.625/2.75)) * t + 0.984375)

export bounceIn    = (t) -> 1 - bounceOut(1-t)
export bounceInOut = (t) -> if (t < 1/2) then bounceIn(t*2)/2 else bounceOut(t*2-1)/2 + 0.5


### Circ Easing ###

export circIn    = (t) -> - (Math.sqrt(1 - t*t) - 1)
export circOut   = (t) ->    Math.sqrt(1 - (t = t-1) * t)
export circInOut = (t) -> if (t = t * 2) < 1 then -(Math.sqrt(1 - t*t) - 1)/2 else (Math.sqrt(1 - (t -= 2) * t) + 1)/2


### Cubic Easing ###

export cubicIn    = (t) -> t*t*t
export cubicOut   = (t) -> (t=t-1)*t*t + 1
export cubicInOut = (t) -> if (t = t*2) < 1 then t*t*t/2 else ((t -= 2)*t*t + 2)/2


### Elastic Easing ###

export elasticOut = (t,amplitude=null,period=null) ->
    if      t == 0 then return 0
    else if t == 1 then return 1
    else
      if !period? then period = 0.3
      if !amplitude? or amplitude < 1
        amplitude = 1
        overshoot = period/4
      else
        overshoot = period/(2*Math.PI) * Math.asin(1/amplitude)
      (amplitude*Math.pow(2,-10*t)) * Math.sin((t*1-overshoot)*(2*Math.PI)/period)+1

export elasticIn = (t,amplitude=null,period=null) ->
    if      t == 0 then return 0
    else if t == 1 then return 1
    else
      if !period? then period = 0.3
      if !amplitude? or amplitude < 1
        amplitude = 1
        overshoot = period/4
      else
        overshoot = period/(2*Math.PI) * Math.asin(1/amplitude)
      t -= 1
      -(amplitude*Math.pow(2,10*t)) * Math.sin((t*1-overshoot)*(2*Math.PI)/period)

export elasticInOut = (t,amplitude=null,period=null) ->
    if t == 0              then return 0
    else if (t = t*2) == 2 then return 1
    else
      if !period? then period = 1*(0.3*1.5)
      if !amplitude? or amplitude < 1
        amplitude = 1
        overshoot = period/4
      else
        overshoot = period/(2*Math.PI)*Math.asin(1/amplitude)
      if t < 1
        return -0.5*(amplitude*Math.pow(2,10*(t-=1))) * Math.sin((t*1-overshoot)*((2*Math.PI)/period))
      else
        return amplitude * Math.pow(2,-10*(t-=1)) * Math.sin((t*1-overshoot)*(2*Math.PI)/period) + 1


### Exponential Easing ###

export expoIn    = (t) -> if t == 0 then 0 else Math.pow(2, 10*(t-1))
export expoOut   = (t) -> if t == 1 then 1 else -Math.pow(2,-10*t/1) + 1
export expoInOut = (t) ->
  if t == 0      then 0
  else if t == 1      then 1
  else if (t=t*2) < 1 then Math.pow(2,10*(t-1))/2
  else                    -Math.pow(2,-10*(t-1))/2 + 1


### Linear Easing ###

export linear = (t) -> t


### Quad Easing ###
export quadIn    = (t) -> t*t
export quadOut   = (t) -> -t*(t-2)
export quadInOut = (t) ->
  if (t = t*2) < 1 then t*t/2
  else -((t -= 1)*(t-2)-1)/2


### Quart Easing ###

export quartIn    = (t) -> t*t*t*t
export quartOut   = (t) -> -((t=t-1)*t*t*t - 1)
export quartInOut = (t) ->
  if (t = t*2) < 1 then t*t*t*t/2
  else -((t-=2)*t*t*t - 2)/2


### Quint Easing ###

export quintIn    = (t) -> t*t*t*t*t
export quintOut   = (t) -> ((t=t-1)*t*t*t*t + 1)
export quintInOut = (t) -> if (t=t*2) < 1 then t*t*t*t*t/2 else ((t -= 2)*t*t*t*t + 2)/2


### Sine Easing ###

export sineIn    = (t) -> -Math.cos(t * (Math.PI/2)) + 1
export sineOut   = (t) ->  Math.sin(t * (Math.PI/2))
export sineInOut = (t) -> -(Math.cos(Math.PI*t/1) - 1)/2
