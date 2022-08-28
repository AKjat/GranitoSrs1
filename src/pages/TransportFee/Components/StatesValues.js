import React from 'react'
import {State} from 'country-state-city'
    const states = State.getStatesOfCountry('IN')

    const AP = {...states?.find(d=> d.isoCode === 'AP'), 'value': 20, 'countryCode': 'IN' }
    const AR = {...states?.find(d=> d.isoCode === 'AR'), 'value': 25, 'countryCode': 'IN' }
    const AS = {...states?.find(d=> d.isoCode === 'AS'), 'value': 25, 'countryCode': 'IN' }
    const BR = {...states?.find(d=> d.isoCode === 'BR'), 'value': 18, 'countryCode': 'IN' }
    const CH = {...states?.find(d=> d.isoCode === 'CH'), 'value': 18, 'countryCode': 'IN' }
    // CH---->Chandigarh value to be set**
    const CT = {...states?.find(d=> d.isoCode === 'CT'), 'value': 20, 'countryCode': 'IN' }
    const DL = {...states?.find(d=> d.isoCode === 'DL'), 'value': 10, 'countryCode': 'IN' }
    const GA = {...states?.find(d=> d.isoCode === 'GA'), 'value': 18, 'countryCode': 'IN' }
    const GJ = {...states?.find(d=> d.isoCode === 'GJ'), 'value': 12, 'countryCode': 'IN' }
    const HR = {...states?.find(d=> d.isoCode === 'HR'), 'value': 10, 'countryCode': 'IN' }
    const HP = {...states?.find(d=> d.isoCode === 'HP'), 'value': 15, 'countryCode': 'IN' }
    const JK = {...states?.find(d=> d.isoCode === 'JK'), 'value': 18, 'countryCode': 'IN' }
    const JH = {...states?.find(d=> d.isoCode === 'JH'), 'value': 18, 'countryCode': 'IN' }
    const KA = {...states?.find(d=> d.isoCode === 'KA'), 'value': 20, 'countryCode': 'IN' }
    const KL = {...states?.find(d=> d.isoCode === 'KL'), 'value': 20, 'countryCode': 'IN' }
    const LA = {...states?.find(d=> d.isoCode === 'LA'), 'value': 20, 'countryCode': 'IN' }
    // LA ----> Ladakh Value***
    const MP = {...states?.find(d=> d.isoCode === 'MP'), 'value': 20, 'countryCode': 'IN' }
    const MH = {...states?.find(d=> d.isoCode === 'MH'), 'value': 15, 'countryCode': 'IN' }
    const MN = {...states?.find(d=> d.isoCode === 'MN'), 'value': 40, 'countryCode': 'IN' }
    const ML = {...states?.find(d=> d.isoCode === 'ML'), 'value': 40, 'countryCode': 'IN' }
    const MZ = {...states?.find(d=> d.isoCode === 'MZ'), 'value': 40, 'countryCode': 'IN' }
    const NL = {...states?.find(d=> d.isoCode === 'NL'), 'value': 40, 'countryCode': 'IN' }
    const OR = {...states?.find(d=> d.isoCode === 'OR'), 'value': 20, 'countryCode': 'IN' }
    const PY = {...states?.find(d=> d.isoCode === 'PY'), 'value': 20, 'countryCode': 'IN' }
    //  PY ====> Pudducherry Value**
    const PB = {...states?.find(d=> d.isoCode === 'PB'), 'value': 12, 'countryCode': 'IN' }
    const RJ = {...states?.find(d=> d.isoCode === 'RJ'), 'value': 5, 'countryCode': 'IN' }
    const SK = {...states?.find(d=> d.isoCode === 'SK'), 'value': 30, 'countryCode': 'IN' }
    const TN = {...states?.find(d=> d.isoCode === 'TN'), 'value': 22, 'countryCode': 'IN' }
    const TG = {...states?.find(d=> d.isoCode === 'TG'), 'value': 22, 'countryCode': 'IN' }
    const TR = {...states?.find(d=> d.isoCode === 'TR'), 'value': 30, 'countryCode': 'IN' }
    const UP = {...states?.find(d=> d.isoCode === 'UP'), 'value': 15, 'countryCode': 'IN' }
    const UT = {...states?.find(d=> d.isoCode === 'UT'), 'value': 15, 'countryCode': 'IN' }
    const WB = {...states?.find(d=> d.isoCode === 'WB'), 'value': 15, 'countryCode': 'IN' }
    const allSStates = []
    allSStates.push(AP, AR, AS, BR, CH, CT, DL, GA, GJ, HR, HP, JK, JH, KA, KL, LA, MP, MH, MN, ML, MZ, NL, OR, PY, PB, RJ, SK, TN, TG, TR, UP, UT, WB)
    const StatesValues = () => {
  return (
    <div>StatesValues</div>
  )
}

export default  allSStates
