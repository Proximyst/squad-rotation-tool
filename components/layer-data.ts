import {useColorModeValue} from "@chakra-ui/react";

export class LayerType {
  public static readonly AAS: LayerType = new LayerType('AAS')
  public static readonly RAAS: LayerType = new LayerType('RAAS')
  public static readonly Insurgency: LayerType = new LayerType('Insurgency')
  public static readonly Destruction: LayerType = new LayerType('Destruction')
  public static readonly Invasion: LayerType = new LayerType('Invasion')
  public static readonly Seed: LayerType = new LayerType('Seed')
  public static readonly Skirmish: LayerType = new LayerType('Skirmish')
  public static readonly TerritoryControl: LayerType = new LayerType('TC', 'Territory Control')
  public static readonly TrackAttack: LayerType = new LayerType('TA', 'Track Attack')
  public static readonly Tanks: LayerType = new LayerType('Tanks', 'Tanks')
  public static readonly Training: LayerType = new LayerType('Training')
  public static readonly Types: Array<LayerType> = [
    LayerType.AAS,
    LayerType.RAAS,
    LayerType.Insurgency,
    LayerType.Destruction,
    LayerType.Invasion,
    LayerType.Seed,
    LayerType.Skirmish,
    LayerType.TerritoryControl,
    LayerType.TrackAttack,
    LayerType.Tanks,
    LayerType.Training,
  ]

  public readonly name: string
  public readonly localised: string

  private constructor(name: string, localised: string = name) {
    this.name = name
    this.localised = localised
  }

  public static find(name: string): LayerType | undefined {
    return LayerType.Types.find(t => t.name == name || t.localised == name)
  }
}

export class Map {
  public static readonly AlBasrah: Map = new Map('AlBasrah', 'al-Basrah')
  public static readonly Anvil: Map = new Map('Anvil')
  public static readonly BelayaPass = new Map('Belaya', 'Belaya Pass')
  public static readonly BlackCoast = new Map('BlackCoast', 'Black Coast')
  public static readonly Chora = new Map('Chora')
  public static readonly Fallujah = new Map('Fallujah')
  public static readonly FoolsRoad = new Map('FoolsRoad', 'Fool\'s Road')
  public static readonly GooseBay = new Map('GooseBay', 'Goose Bay')
  public static readonly Gorodok = new Map('Gorodok')
  public static readonly JensensRange = new Map('JensensRange', 'Jensen\'s Range')
  public static readonly KamdeshHighlands = new Map('Kamdesh', 'Kamdesh Highlands')
  public static readonly KohatToi = new Map('Kohat', 'Kohat Toi')
  public static readonly Kokan = new Map('Kokan')
  public static readonly LashkarValley = new Map('LashkarValley', 'Lashkar Valley')
  public static readonly LogarValley = new Map('Logar', 'Logar Valley')
  public static readonly Manic = new Map('Manic', 'Manic-5')
  public static readonly Mestia = new Map('Mestia')
  public static readonly Mutaha = new Map('Mutaha')
  public static readonly Narva = new Map('Narva')
  public static readonly PacificProvingGrounds = new Map('PacificProvingGrounds', 'Pacific Proving Grounds')
  public static readonly Skorpo = new Map('Skorpo')
  public static readonly SumariBala = new Map('Sumari', 'Sumari Bala')
  public static readonly TallilOutskirts = new Map('Tallil', 'Tallil Outskirts')
  public static readonly Yehorivka = new Map('Yehorivka')
  public static readonly Maps: Array<Map> = [
    Map.AlBasrah,
    Map.Anvil,
    Map.BelayaPass,
    Map.BlackCoast,
    Map.Chora,
    Map.Fallujah,
    Map.FoolsRoad,
    Map.GooseBay,
    Map.Gorodok,
    Map.JensensRange,
    Map.KamdeshHighlands,
    Map.KohatToi,
    Map.Kokan,
    Map.LashkarValley,
    Map.LogarValley,
    Map.Manic,
    Map.Mestia,
    Map.Mutaha,
    Map.Narva,
    Map.PacificProvingGrounds,
    Map.Skorpo,
    Map.SumariBala,
    Map.TallilOutskirts,
    Map.Yehorivka,
  ]

  public readonly name: string
  public readonly localised: string

  private constructor(name: string, localised: string = name) {
    this.name = name
    this.localised = localised
  }

  public static find(name: string): Map | undefined {
    return Map.Maps.find(m => m.name == name || m.localised == name)
  }
}

type FactionType = 'BLUFOR' | 'REDFOR' | 'INDEPENDENT'

export class Faction {
  public static readonly AustralianArmy: Faction = new Faction('AUS', 'Australian Army', 'BLUFOR')
  public static readonly BritishArmy: Faction = new Faction('GB', 'British Army', 'BLUFOR')
  public static readonly CanadianArmy: Faction = new Faction('CAF', 'Canadian Army', 'BLUFOR')
  public static readonly UnitedStatesArmy: Faction = new Faction('US', 'United States Army', 'BLUFOR')
  public static readonly UnitedStatesMarineCorps: Faction = new Faction('USMC', 'United States Marine Corps', 'BLUFOR')
  public static readonly RussianGroundForces: Faction = new Faction('RUS', 'Russian Ground Forces', 'REDFOR')
  public static readonly MiddleEasternAlliance: Faction = new Faction('MEA', 'Middle Eastern Alliance', 'INDEPENDENT')
  public static readonly Insurgents: Faction = new Faction('INS', 'Insurgents', 'INDEPENDENT')
  public static readonly IrregularMilitia: Faction = new Faction('MIL', 'Irregular Militia', 'INDEPENDENT')
  public static readonly Factions: Array<Faction> = [
    Faction.AustralianArmy,
    Faction.BritishArmy,
    Faction.CanadianArmy,
    Faction.UnitedStatesArmy,
    Faction.UnitedStatesMarineCorps,
    Faction.RussianGroundForces,
    Faction.MiddleEasternAlliance,
    Faction.Insurgents,
    Faction.IrregularMilitia,
  ]

  public readonly name: string
  public readonly localised: string
  public readonly type: FactionType

  private constructor(name: string, localised: string, type: FactionType) {
    this.name = name
    this.localised = localised
    this.type = type
  }

  public static find(name: string): Faction | undefined {
    return Faction.Factions.find(f => f.name == name || f.localised == name)
  }

  public readonly colour: () => string = () => {
    switch (this.type) {
      case 'BLUFOR':
        return useColorModeValue('blue.200', 'blue.600')
      case 'REDFOR':
        return useColorModeValue('red.200', 'red.700')
      case 'INDEPENDENT':
        return useColorModeValue('yellow.300', 'yellow.700')
    }
  }
}

export interface Layer {
  layerString: string
  map: Map
  type: LayerType
  tag?: string
  faction1: Faction
  faction2: Faction
  warning?: string
}

function parseSpecialLayer(line: string): Layer {
  const components = line.match(/((\w+)_(\w+)-(\w+))\s+-\s+(\w+)\s+vs\s+(\w+)\s+vs\s+\w+(?:\s+-\s+Warning:\s+(.+))?/)
  if (!components) {
    throw new Error(`Invalid layer line: ${line}`)
  }
  const [_, layerString, rawMap, rawFaction1, rawFaction2, verifyFaction1, verifyFaction2, warning] = components
  if (rawFaction1 != verifyFaction1 || rawFaction2 != verifyFaction2) {
    throw new Error(`Faction mismatch in layer line: ${line}`)
  }
  const map = Map.find(rawMap)
  if (!map) throw new Error(`Map '${rawMap}' in '${layerString}' is unknown`)
  const faction1 = Faction.find(rawFaction1)
  if (!faction1) throw new Error(`Faction '${rawFaction1}' in '${line}' is unknown`)
  const faction2 = Faction.find(rawFaction2)
  if (!faction2) throw new Error(`Faction '${rawFaction2}' in '${line}' is unknown`)

  return {
    layerString: layerString,
    map: map,
    type: LayerType.Training,
    tag: undefined,
    faction1: faction1,
    faction2: faction2,
    warning: warning?.trim(),
  }
}

function parseLayer(line: string): Layer {
  // We will usually get layers in the form of `Narva_Skirmish_v1 - US vs RUS`.
  // However, sometimes, we may get e.g. `PacificProvingGrounds_USMC-MEA - USMC vs MEA vs CIV`.
  // As of Squad v3.0, these are technically only for 2 training maps, so we'll just parse them separately.
  const components = line.match(/((\w+)_(\w+)_(\w+))\s+-\s+(\w+)\s+vs\s+(\w+)(?:\s+-\s+Warning:\s+(.+))?/)
  if (!components) {
    return parseSpecialLayer(line)
  }
  const [_, layerString, rawMap, rawType, tag, rawFaction1, rawFaction2, warning] = components
  const map = Map.find(rawMap)
  if (!map) throw new Error(`Map '${rawMap}' in '${layerString}' is unknown`)
  const coercedType = LayerType.find(rawType)
  if (!coercedType) throw new Error(`Type '${rawType}' in '${layerString}' is unknown`)
  const faction1 = Faction.find(rawFaction1)
  if (!faction1) throw new Error(`Faction '${rawFaction1}' in '${line}' is unknown`)
  const faction2 = Faction.find(rawFaction2)
  if (!faction2) throw new Error(`Faction '${rawFaction2}' in '${line}' is unknown`)

  return {
    layerString: layerString,
    map: map,
    type: coercedType,
    tag: tag,
    faction1: faction1,
    faction2: faction2,
    warning: warning?.trim(),
  }
}

function parseLayers(list: string): Array<Layer> {
  return list.split('\n').filter(l => !!l.trim()).map(l => parseLayer(l))
}

// Now close your eyes my, darlings.
export const Layers: Array<Layer> = parseLayers(`
AlBasrah_AAS_v1 - US vs MEA
AlBasrah_AAS_v2 - US vs INS
AlBasrah_AAS_v3 - AUS vs INS
AlBasrah_Insurgency_v1 - GB vs INS
AlBasrah_Invasion_v1 - GB vs INS
AlBasrah_Invasion_v2 - USMC vs INS
AlBasrah_Invasion_v3 - AUS vs INS
AlBasrah_Invasion_v4 - CAF vs INS
AlBasrah_Invasion_v5 - CAF vs MEA
AlBasrah_Invasion_v6 - CAF vs INS
AlBasrah_RAAS_v1 - MIL vs INS
AlBasrah_Seed_v1 - GB vs MEA
AlBasrah_Skirmish_v1 - GB vs MEA
AlBasrah_Skirmish_v2 - MIL vs INS
AlBasrah_TA_v1 - US vs US
AlBasrah_TC_v1 - GB vs MEA
AlBasrah_TC_v2 - US vs MEA
Anvil_AAS_v1 - AUS vs RUS
Anvil_AAS_v2 - AUS vs RUS
Anvil_Invasion_v1 - AUS vs INS
Anvil_Invasion_v2 - AUS vs INS
Anvil_RAAS_v1 - RUS vs MEA
Anvil_RAAS_v2 - CAF vs MEA
Anvil_RAAS_v3 - AUS vs MEA
Anvil_RAAS_v4 - AUS vs RUS
Anvil_Skirmish_v1 - AUS vs RUS
Anvil_TC_v1 - AUS vs RUS
Belaya_AAS_v1 - RUS vs MIL
Belaya_AAS_v2 - GB vs RUS
Belaya_AAS_v3 - CAF vs RUS
Belaya_Invasion_v1 - RUS vs MIL
Belaya_Invasion_v2 - US vs RUS
Belaya_Invasion_v3 - GB vs RUS
Belaya_RAAS_v1 - US vs RUS
Belaya_RAAS_v2 - USMC vs MIL
Belaya_RAAS_v3 - GB vs MIL
Belaya_RAAS_v4 - CAF vs RUS
Belaya_RAAS_v5 - CAF vs MIL
Belaya_Skirmish_v1 - GB vs RUS
Belaya_TC_v1 - US vs RUS
BlackCoast_AAS_v1 - USMC vs RUS
BlackCoast_AAS_v2 - GB vs MIL
BlackCoast_Invasion_v1 - USMC vs RUS
BlackCoast_Invasion_v2 - USMC vs MIL
BlackCoast_Invasion_v3 - CAF vs MIL
BlackCoast_RAAS_v1 - USMC vs RUS
BlackCoast_RAAS_v2 - USMC vs MIL
BlackCoast_RAAS_v3 - GB vs RUS
BlackCoast_RAAS_v4 - CAF vs RUS
BlackCoast_Seed_v1 - USMC vs RUS
BlackCoast_Skirmish_v1 - USMC vs RUS
Chora_AAS_v1 - US vs MEA
Chora_AAS_v2 - USMC vs RUS
Chora_AAS_v3 - US vs RUS
Chora_AAS_v4 - AUS vs RUS
Chora_AAS_v5 - CAF vs RUS
Chora_Insurgency_v1 - US vs INS
Chora_Invasion_v1 - US vs INS
Chora_Invasion_v2 - US vs INS
Chora_RAAS_v1 - US vs RUS
Chora_RAAS_v2 - GB vs MEA
Chora_RAAS_v3 - AUS vs INS
Chora_RAAS_v4 - CAF vs MEA
Chora_Skirmish_v1 - US vs RUS
Chora_TC_v1 - US vs MEA
Fallujah_AAS_v1 - MEA vs INS
Fallujah_AAS_v2 - US vs MEA
Fallujah_Insurgency_v1 - US vs INS
Fallujah_Invasion_v1 - USMC vs INS
Fallujah_Invasion_v2 - MEA vs INS
Fallujah_Invasion_v3 - USMC vs INS
Fallujah_Invasion_v4 - AUS vs INS
Fallujah_Invasion_v5 - CAF vs INS
Fallujah_RAAS_v1 - USMC vs MEA
Fallujah_RAAS_v2 - GB vs MEA
Fallujah_RAAS_v3 - USMC vs MEA
Fallujah_RAAS_v4 - AUS vs MEA
Fallujah_RAAS_v5 - CAF vs MEA
Fallujah_RAAS_v6 - USMC vs INS
Fallujah_Seed_v1 - US vs MEA
Fallujah_Skirmish_v1 - US vs MEA
Fallujah_Skirmish_v2 - US vs INS
Fallujah_TC_v1 - US vs MEA
Fallujah_TC_v2 - US vs MEA
FoolsRoad_AAS_v1 - US vs RUS
FoolsRoad_AAS_v2 - US vs RUS
FoolsRoad_Destruction_v1 - RUS vs MIL
FoolsRoad_Invasion_v1 - GB vs MIL
FoolsRoad_RAAS_v1 - GB vs RUS
FoolsRoad_RAAS_v2 - GB vs RUS
FoolsRoad_RAAS_v3 - GB vs MIL
FoolsRoad_RAAS_v4 - AUS vs RUS
FoolsRoad_RAAS_v5 - CAF vs RUS
FoolsRoad_Skirmish_v1 - US vs RUS
FoolsRoad_Skirmish_v2 - US vs RUS
FoolsRoad_TC_v1 - RUS vs MIL
GooseBay_AAS_v1 - CAF vs RUS
GooseBay_AAS_v2 - CAF vs RUS
GooseBay_Invasion_v1 - CAF vs RUS
GooseBay_Invasion_v2 - CAF vs MIL
GooseBay_Invasion_v3 - US vs RUS
GooseBay_Invasion_v4 - USMC vs RUS
GooseBay_RAAS_v1 - CAF vs RUS
GooseBay_RAAS_v2 - US vs RUS
GooseBay_RAAS_v3 - USMC vs RUS
GooseBay_Skirmish_v1 - CAF vs RUS
Gorodok_AAS_v1 - US vs RUS
Gorodok_AAS_v2 - GB vs RUS
Gorodok_AAS_v3 - CAF vs RUS
Gorodok_AAS_v4 - USMC vs RUS
Gorodok_Destruction_v1 - US vs RUS
Gorodok_Insurgency_v1 - RUS vs MIL
Gorodok_Invasion_v1 - US vs RUS
Gorodok_Invasion_v2 - RUS vs MIL
Gorodok_Invasion_v3 - CAF vs MIL
Gorodok_RAAS_v01 - US vs RUS
Gorodok_RAAS_v02 - GB vs RUS
Gorodok_RAAS_v03 - US vs RUS
Gorodok_RAAS_v04 - US vs RUS
Gorodok_RAAS_v05 - US vs RUS
Gorodok_RAAS_v06 - USMC vs RUS
Gorodok_RAAS_v07 - AUS vs RUS
Gorodok_RAAS_v08 - AUS vs MIL
Gorodok_RAAS_v09 - CAF vs RUS
Gorodok_RAAS_v10 - CAF vs MIL
Gorodok_RAAS_v11 - CAF vs US
Gorodok_Skirmish_v1 - GB vs RUS
Gorodok_TC_v1 - US vs RUS
Gorodok_TC_v2 - CAF vs RUS
JensensRange_AUS-RUS - AUS vs RUS vs CIV - Warning: This is a training map, not intended for normal server rotations.
JensensRange_CAF-INS - CAF vs INS vs CIV - Warning: This is a training map, not intended for normal server rotations.
JensensRange_GB-MIL - GB vs MIL vs CIV - Warning: This is a training map, not intended for normal server rotations.
JensensRange_US-RUS - US vs RUS vs CIV - Warning: This is a training map, not intended for normal server rotations.
JensensRange_USMC-MEA - USMC vs MEA vs CIV - Warning: This is a training map, not intended for normal server rotations.
Kamdesh_AAS_v1 - AUS vs RUS
Kamdesh_Insurgency_v1 - AUS vs INS
Kamdesh_Insurgency_v2 - GB vs INS
Kamdesh_Invasion_v1 - US vs INS
Kamdesh_Invasion_v2 - GB vs INS
Kamdesh_Invasion_v3 - US vs INS
Kamdesh_Invasion_v4 - AUS vs INS
Kamdesh_Invasion_v5 - AUS vs INS
Kamdesh_Invasion_v6 - AUS vs MEA
Kamdesh_Invasion_v7 - CAF vs INS
Kamdesh_RAAS_v1 - MIL vs INS
Kamdesh_RAAS_v2 - GB vs RUS
Kamdesh_RAAS_v3 - US vs MEA
Kamdesh_RAAS_v4 - GB vs MEA
Kamdesh_RAAS_v5 - AUS vs MEA
Kamdesh_RAAS_v6 - AUS vs RUS
Kamdesh_RAAS_v7 - CAF vs INS
Kamdesh_Skirmish_v1 - AUS vs GB
Kamdesh_TC_v1 - GB vs RUS
Kamdesh_TC_v2 - MIL vs INS
Kamdesh_TC_v3 - AUS vs RUS
Kamdesh_TC_v4 - CAF vs INS
Kohat_AAS_v1 - US vs MEA
Kohat_AAS_v2 - US vs RUS
Kohat_AAS_v3 - AUS vs RUS
Kohat_Insurgency_v1 - US vs INS
Kohat_Invasion_v1 - US vs INS
Kohat_Invasion_v2 - US vs INS
Kohat_Invasion_v3 - CAF vs INS
Kohat_RAAS_v1 - US vs RUS
Kohat_RAAS_v2 - USMC vs RUS
Kohat_RAAS_v3 - RUS vs MEA
Kohat_RAAS_v4 - GB vs RUS
Kohat_RAAS_v5 - US vs RUS
Kohat_RAAS_v6 - GB vs RUS
Kohat_RAAS_v7 - RUS vs MEA
Kohat_RAAS_v8 - AUS vs RUS
Kohat_RAAS_v9 - CAF vs INS
Kohat_Skirmish_v1 - US vs GB
Kohat_TC_v1 - RUS vs MEA
Kokan_AAS_v1 - RUS vs MEA
Kokan_AAS_v2 - GB vs MEA
Kokan_AAS_v3 - AUS vs RUS
Kokan_Insurgency_v1 - US vs INS
Kokan_Invasion_v1 - RUS vs INS
Kokan_RAAS_v1 - US vs MEA
Kokan_RAAS_v2 - RUS vs MEA
Kokan_RAAS_v3 - AUS vs RUS
Kokan_RAAS_v4 - CAF vs MEA
Kokan_Skirmish_v1 - MIL vs INS
Kokan_TC_v1 - US vs MEA
LashkarValley_AAS_v1 - GB vs RUS
LashkarValley_AAS_v2 - US vs MEA
LashkarValley_AAS_v3 - AUS vs RUS
LashkarValley_AAS_v4 - AUS vs MEA
LashkarValley_Insurgency_v1 - US vs INS
LashkarValley_Invasion_v1 - US vs INS
LashkarValley_Invasion_v2 - AUS vs INS
LashkarValley_Invasion_v3 - CAF vs INS
LashkarValley_RAAS_v1 - US vs MEA
LashkarValley_RAAS_v2 - AUS vs RUS
LashkarValley_RAAS_v3 - AUS vs MEA
LashkarValley_RAAS_v4 - CAF vs INS
LashkarValley_RAAS_v5 - USMC vs INS
LashkarValley_Skirmish_v1 - AUS vs INS
LashkarValley_TC_v1 - GB vs MEA
LashkarValley_TC_v2 - US vs MEA
LashkarValley_TC_v3 - GB vs RUS
LashkarValley_TC_v4 - AUS vs RUS
LashkarValley_TC_v5 - CAF vs INS
Logar_AAS_v1 - RUS vs MEA
Logar_AAS_v2 - US vs MEA
Logar_AAS_v3 - AUS vs RUS
Logar_Insurgency_v1 - RUS vs INS
Logar_RAAS_v1 - RUS vs MEA
Logar_RAAS_v2 - CAF vs MEA
Logar_Seed_v1 - US vs RUS
Logar_Skirmish_v1 - US vs MEA
Logar_TC_v1 - US vs MEA
Manic_AAS_v1 - CAF vs RUS
Manic_AAS_v2 - CAF vs RUS
Manic_Invasion_v1 - CAF vs RUS
Manic_Invasion_v2 - CAF vs US
Manic_RAAS_v1 - CAF vs RUS
Manic_RAAS_v2 - CAF vs MIL
Manic_RAAS_v3 - CAF vs RUS
Manic_RAAS_v4 - CAF vs RUS
Manic_Skirmish_v1 - CAF vs MIL
Manic_Skirmish_v2 - CAF vs US
Manic_TC_v1 - CAF vs RUS
Mestia_AAS_v1 - RUS vs MIL
Mestia_AAS_v2 - US vs RUS
Mestia_Invasion_v1 - RUS vs MIL
Mestia_Invasion_v2 - US vs MIL
Mestia_RAAS_v1 - US vs MIL
Mestia_RAAS_v2 - CAF vs RUS
Mestia_Skirmish_v1 - GB vs MEA
Mestia_TC_v1 - US vs RUS
Mutaha_AAS_v1 - US vs RUS
Mutaha_AAS_v2 - GB vs RUS
Mutaha_AAS_v3 - AUS vs RUS
Mutaha_AAS_v4 - CAF vs RUS
Mutaha_Invasion_v1 - GB vs INS
Mutaha_Invasion_v2 - GB vs INS
Mutaha_Invasion_v3 - AUS vs INS
Mutaha_Invasion_v4 - CAF vs INS
Mutaha_RAAS_v1 - US vs MEA
Mutaha_RAAS_v2 - AUS vs RUS
Mutaha_RAAS_v3 - GB vs MEA
Mutaha_RAAS_v4 - CAF vs RUS
Mutaha_RAAS_v5 - CAF vs MEA
Mutaha_RAAS_v6 - USMC vs MEA
Mutaha_Skirmish_v1 - US vs MEA
Mutaha_TC_v1 - US vs RUS
Mutaha_TC_v2 - US vs MEA
Narva_AAS_v1 - US vs RUS
Narva_AAS_v2 - GB vs RUS
Narva_AAS_v3 - US vs RUS
Narva_AAS_v4 - USMC vs RUS
Narva_Destruction_v1 - US vs RUS
Narva_Invasion_v1 - US vs RUS
Narva_Invasion_v2 - GB vs RUS
Narva_Invasion_v3 - US vs RUS
Narva_Invasion_v4 - CAF vs MIL
Narva_RAAS_v1 - US vs RUS
Narva_RAAS_v2 - USMC vs RUS
Narva_RAAS_v3 - CAF vs MIL
Narva_RAAS_v4 - CAF vs RUS
Narva_Skirmish_v1 - US vs RUS
Narva_TA_v1 - RUS vs RUS
Narva_TC_v1 - US vs RUS
Narva_TC_v2 - US vs RUS
PacificProvingGrounds_USMC-MEA - USMC vs MEA vs CIV - Warning: This is a training map, not intended for normal server rotations.
PacificProvingGrounds_USMC-RUS - USMC vs RUS vs CIV - Warning: This is a training map, not intended for normal server rotations.
Skorpo_AAS_v1 - US vs RUS
Skorpo_Invasion_v1 - US vs MIL
Skorpo_Invasion_v2 - RUS vs MIL
Skorpo_RAAS_v1 - US vs RUS
Skorpo_RAAS_v2 - US vs RUS
Skorpo_RAAS_v3 - US vs MIL
Skorpo_RAAS_v4 - US vs RUS
Skorpo_RAAS_v5 - CAF vs RUS
Skorpo_Skirmish_v1 - US vs RUS
Skorpo_TC_v1 - US vs RUS
Skorpo_TC_v2 - US vs RUS
Skorpo_TC_v3 - US vs RUS
Sumari_AAS_v1 - GB vs MEA
Sumari_AAS_v2 - US vs RUS
Sumari_AAS_v3 - AUS vs RUS
Sumari_AAS_v4 - CAF vs MEA
Sumari_AAS_v5 - USMC vs MEA
Sumari_Insurgency_v1 - US vs INS
Sumari_Invasion_v1 - US vs INS
Sumari_RAAS_v1 - US vs MEA
Sumari_RAAS_v2 - GB vs MEA
Sumari_Seed_v1 - US vs RUS
Sumari_Seed_v2 - AUS vs INS
Sumari_Skirmish_v1 - MIL vs INS
Sumari_TC_v1 - US vs MEA
Tallil_AAS_v1 - US vs RUS
Tallil_AAS_v2 - US vs MEA
Tallil_Invasion_v1 - US vs RUS
Tallil_Invasion_v2 - RUS vs INS
Tallil_Invasion_v3 - US vs INS
Tallil_Invasion_v4 - AUS vs INS
Tallil_RAAS_v1 - US vs MEA
Tallil_RAAS_v2 - US vs MEA
Tallil_RAAS_v3 - US vs RUS
Tallil_RAAS_v4 - GB vs RUS
Tallil_RAAS_v5 - AUS vs RUS
Tallil_RAAS_v6 - CAF vs RUS
Tallil_RAAS_v7 - CAF vs MEA
Tallil_Seed_v1 - USMC vs INS
Tallil_Seed_v2 - CAF vs INS
Tallil_Skirmish_v1 - US vs RUS
Tallil_Skirmish_v2 - US vs RUS
Tallil_Skirmish_v3 - MIL vs INS
Tallil_TA_v1 - US vs US
Tallil_TC_v1 - US vs RUS
Tallil_Tanks_v1 - US vs MEA
Tallil_Tanks_v2 - US vs RUS
Yehorivka_AAS_v1 - GB vs RUS
Yehorivka_AAS_v2 - US vs RUS
Yehorivka_AAS_v3 - AUS vs RUS
Yehorivka_AAS_v4 - USMC vs RUS
Yehorivka_Destruction_v1 - US vs RUS
Yehorivka_Invasion_v1 - GB vs MIL
Yehorivka_Invasion_v2 - US vs RUS
Yehorivka_Invasion_v3 - CAF vs MIL
Yehorivka_RAAS_v01 - USMC vs RUS
Yehorivka_RAAS_v02 - US vs RUS
Yehorivka_RAAS_v03 - GB vs RUS
Yehorivka_RAAS_v04 - US vs RUS
Yehorivka_RAAS_v05 - US vs RUS
Yehorivka_RAAS_v06 - US vs RUS
Yehorivka_RAAS_v07 - GB vs RUS
Yehorivka_RAAS_v08 - AUS vs RUS
Yehorivka_RAAS_v09 - CAF vs MIL
Yehorivka_RAAS_v10 - CAF vs RUS
Yehorivka_RAAS_v11 - CAF vs RUS
Yehorivka_RAAS_v12 - CAF vs RUS
Yehorivka_Skirmish_v1 - US vs RUS
Yehorivka_Skirmish_v2 - GB vs RUS
Yehorivka_Skirmish_v3 - US vs RUS
Yehorivka_TA_v1 - RUS vs RUS
Yehorivka_TC_v1 - US vs RUS
Yehorivka_TC_v2 - US vs RUS
Yehorivka_TC_v3 - CAF vs RUS
`)
