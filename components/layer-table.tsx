import {
  ModalContentProps,
  ModalOverlayProps,
  ModalProps,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tooltip,
  Tr
} from "@chakra-ui/react";
import {Layers} from "./layer-data";
import {WarningIcon} from "@chakra-ui/icons";

export function LayerTable(): JSX.Element {
  return <TableContainer>
    <Table variant='simple'>
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
        {Layers.map(l => {
          const warning = l.warning
              ?
              <Tooltip hasArrow label={l.warning} fontSize='md' placement='right'>
                <WarningIcon color='yellow.500'/>
              </Tooltip>
              : <></>;
          return <Tr key={l.layerString}>
            <Td>{l.layerString} {warning}</Td>
            <Td><Tag>{l.map.localised}</Tag></Td>
            <Td><Tag>{l.type.localised}</Tag></Td>
            <Td><Tag>{l.tag}</Tag></Td>
            <Td><Tag bg={l.faction1.colour()}>{l.faction1.localised}</Tag></Td>
            <Td><Tag bg={l.faction2.colour()}>{l.faction2.localised}</Tag></Td>
          </Tr>;
        })}
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
}
