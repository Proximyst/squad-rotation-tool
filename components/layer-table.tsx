import {Table, TableContainer, Tag, Tbody, Td, Tfoot, Th, Thead, Tooltip, Tr} from '@chakra-ui/react';
import {Layer, LAYERS} from './layer-data';
import {WarningIcon} from '@chakra-ui/icons';
import {memo, useMemo} from 'react';

function LayerRow({layer}: { layer: Layer }): JSX.Element {
  console.log(`Called for ${layer.layerString}`);

  const warning = layer.warning
      ? <Tooltip hasArrow label={layer.warning} fontSize="md" placement="right">
        <WarningIcon color="yellow.500"/>
      </Tooltip>
      : <></>;
  return (
      <Tr key={layer.layerString}>
        <Td>{layer.layerString} {warning}</Td>
        <Td>{layer.map.asTag}</Td>
        <Td>{layer.type.asTag}</Td>
        <Td><Tag>{layer.tag}</Tag></Td>
        <Td>{layer.faction1.asTag}</Td>
        <Td>{layer.faction2.asTag}</Td>
      </Tr>
  );
}

export function LayerTable(): JSX.Element {
  return (
      <TableContainer key="layer-table">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Layer name</Th>
              <Th>Map name</Th>
              <Th>Game mode</Th>
              <Th>Tag</Th>
              <Th>Faction 1</Th>
              <Th>Faction 2</Th>
            </Tr>
          </Thead>
          <Tbody>
            {LAYERS.map(l => (<LayerRow key={l.layerString} layer={l}/>))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Layer name</Th>
              <Th>Map name</Th>
              <Th>Game mode</Th>
              <Th>Tag</Th>
              <Th>Faction 1</Th>
              <Th>Faction 2</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
  );
}
