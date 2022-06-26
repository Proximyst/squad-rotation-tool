import {Tag, useColorModeValue} from '@chakra-ui/react';

export class LayerType {
  public static readonly AAS: LayerType = new LayerType('AAS');
  public static readonly RAAS: LayerType = new LayerType('RAAS');
  public static readonly INSURGENCY: LayerType = new LayerType('Insurgency');
  public static readonly DESTRUCTION: LayerType = new LayerType('Destruction');
  public static readonly INVASION: LayerType = new LayerType('Invasion');
  public static readonly SEED: LayerType = new LayerType('Seed');
  public static readonly SKIRMISH: LayerType = new LayerType('Skirmish');
  public static readonly TERRITORY_CONTROL: LayerType = new LayerType('TC', 'Territory Control');
  public static readonly TRACK_ATTACK: LayerType = new LayerType('TA', 'Track Attack');
  public static readonly TANKS: LayerType = new LayerType('Tanks', 'Tanks');
  public static readonly TRAINING: LayerType = new LayerType('Training');

  public static readonly TYPES: Array<LayerType> = [
    LayerType.AAS,
    LayerType.RAAS,
    LayerType.INSURGENCY,
    LayerType.DESTRUCTION,
    LayerType.INVASION,
    LayerType.SEED,
    LayerType.SKIRMISH,
    LayerType.TERRITORY_CONTROL,
    LayerType.TRACK_ATTACK,
    LayerType.TANKS,
    LayerType.TRAINING,
  ];

  private constructor(public readonly name: string, public readonly localised: string = name) {
  }

  public static find(name: string): LayerType | undefined {
    return LayerType.TYPES.find(t => t.name == name || t.localised == name);
  }

  public get asTag(): JSX.Element {
    return (
        <Tag>{this.localised}</Tag>
    );
  }
}

export class Map {
  public static readonly AL_BASRAH: Map = new Map('AlBasrah', 'al-Basrah');
  public static readonly ANVIL: Map = new Map('Anvil');
  public static readonly BELAYA_PASS = new Map('Belaya', 'Belaya Pass');
  public static readonly BLACK_COAST = new Map('BlackCoast', 'Black Coast');
  public static readonly CHORA = new Map('Chora');
  public static readonly FALLUJAH = new Map('Fallujah');
  public static readonly FOOLS_ROAD = new Map('FoolsRoad', 'Fool\'s Road');
  public static readonly GOOSE_BAY = new Map('GooseBay', 'Goose Bay');
  public static readonly GORODOK = new Map('Gorodok');
  public static readonly JENSENS_RANGE = new Map('JensensRange', 'Jensen\'s Range');
  public static readonly KAMDESH_HIGHLANDS = new Map('Kamdesh', 'Kamdesh Highlands');
  public static readonly KOHAT_TOI = new Map('Kohat', 'Kohat Toi');
  public static readonly KOKAN = new Map('Kokan');
  public static readonly LASHKAR_VALLEY = new Map('LashkarValley', 'Lashkar Valley');
  public static readonly LOGAR_VALLEY = new Map('Logar', 'Logar Valley');
  public static readonly MANIC = new Map('Manic', 'Manic-5');
  public static readonly MESTIA = new Map('Mestia');
  public static readonly MUTAHA = new Map('Mutaha');
  public static readonly NARVA = new Map('Narva');
  public static readonly PACIFIC_PROVING_GROUNDS = new Map('PacificProvingGrounds', 'Pacific Proving Grounds');
  public static readonly SKORPO = new Map('Skorpo');
  public static readonly SUMARI_BALA = new Map('Sumari', 'Sumari Bala');
  public static readonly TALLIL_OUTSKIRTS = new Map('Tallil', 'Tallil Outskirts');
  public static readonly YEHORIVKA = new Map('Yehorivka');

  public static readonly MAPS: Array<Map> = [
    Map.AL_BASRAH,
    Map.ANVIL,
    Map.BELAYA_PASS,
    Map.BLACK_COAST,
    Map.CHORA,
    Map.FALLUJAH,
    Map.FOOLS_ROAD,
    Map.GOOSE_BAY,
    Map.GORODOK,
    Map.JENSENS_RANGE,
    Map.KAMDESH_HIGHLANDS,
    Map.KOHAT_TOI,
    Map.KOKAN,
    Map.LASHKAR_VALLEY,
    Map.LOGAR_VALLEY,
    Map.MANIC,
    Map.MESTIA,
    Map.MUTAHA,
    Map.NARVA,
    Map.PACIFIC_PROVING_GROUNDS,
    Map.SKORPO,
    Map.SUMARI_BALA,
    Map.TALLIL_OUTSKIRTS,
    Map.YEHORIVKA,
  ];

  private constructor(public readonly name: string, public readonly localised: string = name) {
  }

  public static find(name: string): Map | undefined {
    return Map.MAPS.find(m => m.name == name || m.localised == name);
  }

  public static sortedMapsByLocalised(opts?: { caseSensitive?: boolean }): Array<Map> {
    const {caseSensitive = false} = opts ?? {};
    return new Array<Map>(...Map.MAPS).sort((a, b) => {
      if (caseSensitive) {
        return a.localised.localeCompare(b.localised);
      } else {
        return a.localised.toLocaleLowerCase().localeCompare(b.localised.toLocaleLowerCase());
      }
    });
  }

  public get asTag(): JSX.Element {
    return (
        <Tag>{this.localised}</Tag>
    );
  }

  /**
   * @return the layer types that are applicable to this map; sorted by localised name
   */
  public findLayerTypes(opts?: { caseSensitiveSort?: boolean }): Array<LayerType> {
    const {caseSensitiveSort = false} = opts ?? {};
    return [...new Set(LAYERS.filter(l => l.map.name == this.name).map(l => l.type))]
    .sort((a, b) => {
      if (caseSensitiveSort) {
        return a.localised.localeCompare(b.localised);
      } else {
        return a.localised.toLocaleLowerCase().localeCompare(b.localised.toLocaleLowerCase());
      }
    });
  }

  /**
   * @return the layers that are applicable to this map and layer type; will be sorted by tag
   */
  public findLayers(opts?: { type?: LayerType, caseSensitiveSort?: boolean }): Array<Layer> {
    const {type, caseSensitiveSort = false} = opts ?? {};
    return [...new Set(LAYERS.filter(l => l.map.name == this.name && (!type || l.type.name == type.name)))]
    .sort((a, b) => {
      if (caseSensitiveSort) {
        return a.tag.localeCompare(b.tag);
      } else {
        return a.tag.toLocaleLowerCase().localeCompare(b.tag.toLocaleLowerCase());
      }
    });
  }
}

type FactionType = 'BLUFOR' | 'REDFOR' | 'INDEPENDENT';

export class Faction {
  public static readonly AUSTRALIAN_ARMY: Faction = new Faction('AUS', 'Australian Army', 'BLUFOR');
  public static readonly BRITISH_ARMY: Faction = new Faction('GB', 'British Army', 'BLUFOR');
  public static readonly CANADIAN_ARMY: Faction = new Faction('CAF', 'Canadian Army', 'BLUFOR');
  public static readonly UNITED_STATES_ARMY: Faction = new Faction('US', 'United States Army', 'BLUFOR');
  public static readonly UNITED_STATES_MARINE_CORPS: Faction = new Faction('USMC', 'United States Marine Corps', 'BLUFOR');
  public static readonly RUSSIAN_GROUND_FORCES: Faction = new Faction('RUS', 'Russian Ground Forces', 'REDFOR');
  public static readonly MIDDLE_EASTERN_ALLIANCE: Faction = new Faction('MEA', 'Middle Eastern Alliance', 'INDEPENDENT');
  public static readonly INSURGENTS: Faction = new Faction('INS', 'Insurgents', 'INDEPENDENT');
  public static readonly IRREGULAR_MILITIA: Faction = new Faction('MIL', 'Irregular Militia', 'INDEPENDENT');

  public static readonly FACTIONS: Array<Faction> = [
    Faction.AUSTRALIAN_ARMY,
    Faction.BRITISH_ARMY,
    Faction.CANADIAN_ARMY,
    Faction.UNITED_STATES_ARMY,
    Faction.UNITED_STATES_MARINE_CORPS,
    Faction.RUSSIAN_GROUND_FORCES,
    Faction.MIDDLE_EASTERN_ALLIANCE,
    Faction.INSURGENTS,
    Faction.IRREGULAR_MILITIA,
  ];

  private constructor(public readonly name: string, public readonly localised: string, public readonly type: FactionType) {
  }

  public static find(name: string): Faction | undefined {
    return Faction.FACTIONS.find(f => f.name == name || f.localised == name);
  }

  public get colour(): () => string {
    return () => {
      switch (this.type) {
        case 'BLUFOR':
          return useColorModeValue('blue.200', 'blue.600');
        case 'REDFOR':
          return useColorModeValue('red.200', 'red.700');
        case 'INDEPENDENT':
          return useColorModeValue('yellow.300', 'yellow.700');
      }
    };
  }

  public get nameAsTag(): JSX.Element {
    return (
        <Tag bg={this.colour()}>{this.name}</Tag>
    );
  }

  public get asTag(): JSX.Element {
    return (
        <Tag bg={this.colour()}>{this.localised}</Tag>
    );
  }
}

export interface Layer {
  layerString: string;
  map: Map;
  type: LayerType;
  tag: string;
  faction1: Faction;
  faction2: Faction;
  warning?: string;
}

function parseLayer(line: string): Layer {
  const components = line.match(/((\w+)_(\w+)_(\w+))\s+-\s+(\w+)\s+vs\s+(\w+)(?:\s+-\s+Warning:\s+(.+))?/);
  if (!components) {
    throw new Error(`Could not parse layer line: ${line}`);
  }
  const [_, layerString, rawMap, rawType, tag, rawFaction1, rawFaction2, warning] = components;
  const map = Map.find(rawMap);
  if (!map) {
    throw new Error(`Map '${rawMap}' in '${layerString}' is unknown`);
  }
  const coercedType = LayerType.find(rawType);
  if (!coercedType) {
    throw new Error(`Type '${rawType}' in '${layerString}' is unknown`);
  }
  const faction1 = Faction.find(rawFaction1);
  if (!faction1) {
    throw new Error(`Faction '${rawFaction1}' in '${line}' is unknown`);
  }
  const faction2 = Faction.find(rawFaction2);
  if (!faction2) {
    throw new Error(`Faction '${rawFaction2}' in '${line}' is unknown`);
  }

  return {
    layerString: layerString,
    map: map,
    type: coercedType,
    tag: tag,
    faction1: faction1,
    faction2: faction2,
    warning: warning?.trim(),
  };
}

function parseLayers(list: string): Array<Layer> {
  return list.split('\n').filter(l => !!l.trim()).map(l => parseLayer(l));
}

// Now close your eyes my, darlings.
export const LAYERS: Array<Layer> = parseLayers(`
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
`);
