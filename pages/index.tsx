import {
    Box,
    Button,
    Flex,
    IconButton,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Table,
    TableContainer,
    Tag,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import { LayerTable } from '../components/layer-table';
import {
    AddIcon,
    EditIcon,
    InfoIcon,
    MoonIcon,
    SunIcon,
} from '@chakra-ui/icons';
import { ReactNode, useState } from 'react';
import { Faction, Layer, LayerType, Map } from '../components/layer-data';
import {
    chakraComponents,
    OnChangeValue,
    Select,
    SelectComponentsConfig,
} from 'chakra-react-select';

interface LayersState {
    rows: Array<Layer | undefined>;
}

function LayerListModal({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}): ReactNode & JSX.Element {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="full"
            scrollBehavior="inside"
        >
            <ModalOverlay />
            <ModalContent margin="2vw">
                <ModalHeader>Layer list</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <LayerTable />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

function NewLayerModal({
    state,
    setState,
    isOpen,
    onClose,
}: {
    state: LayersState;
    setState: (newState: LayersState) => void;
    isOpen: boolean;
    onClose: () => void;
}): ReactNode & JSX.Element {
    interface NewLayer {
        map?: Map;
        type?: LayerType;
        tag?: string;
        layer?: Layer;
    }

    interface Option {
        label: string;
        value: string;
    }

    interface TagOption extends Option {
        faction1: Faction;
        faction2: Faction;
    }

    const [newLayerState, setNewLayerState] = useState<NewLayer>({});
    const setMapState = (v?: OnChangeValue<Option, false>) =>
        setNewLayerState({
            map: v ? Map.find(v.value) : undefined,
        });
    const setTypeState = (v?: OnChangeValue<Option, false>) =>
        setNewLayerState({
            map: newLayerState.map,
            type: v ? LayerType.find(v.value) : undefined,
        });
    const setTagState = (v?: OnChangeValue<TagOption, false>) =>
        setNewLayerState({
            map: newLayerState.map,
            type: newLayerState.type,
            tag: v ? v.value : undefined,
            layer: v
                ? newLayerState
                      .map!.findLayers({ type: newLayerState.type })
                      .find((l) => l.tag === v.value)
                : undefined,
        });

    const mapOptions = Map.sortedMapsByLocalised().map((map) => ({
        label: map.localised,
        value: map.name,
    }));
    const mapSelect = (
        <Select
            options={mapOptions}
            value={
                !newLayerState.map
                    ? null
                    : {
                          label: newLayerState.map.localised,
                          value: newLayerState.map.name,
                      }
            }
            onChange={setMapState}
        />
    );
    const typeOptions = newLayerState.map
        ?.findLayerTypes()
        ?.map((type) => ({ label: type.localised, value: type.name }));
    const typeSelect = (
        <Select
            options={typeOptions}
            isDisabled={!newLayerState.map}
            value={
                !newLayerState.type
                    ? null
                    : {
                          label: newLayerState.type?.localised,
                          value: newLayerState.type?.name,
                      }
            }
            onChange={setTypeState}
        />
    );

    const customTagComponents: SelectComponentsConfig<TagOption, false, any> = {
        Option: ({ children, ...props }) => (
            <chakraComponents.Option {...props}>
                <span>
                    {children} {props.data.faction1.nameAsTag}{' '}
                    {props.data.faction2.nameAsTag}
                </span>
            </chakraComponents.Option>
        ),
        SingleValue: ({ children, ...props }) => (
            <chakraComponents.SingleValue {...props}>
                <span>
                    {children} {props.data.faction1.nameAsTag}{' '}
                    {props.data.faction2.nameAsTag}
                </span>
            </chakraComponents.SingleValue>
        ),
    };
    const tagOptions = newLayerState.map
        ?.findLayers({ type: newLayerState.type })
        ?.map((l) => ({
            label: l.tag.trim() ? l.tag : '[none]',
            value: l.tag,
            faction1: l.faction1,
            faction2: l.faction2,
        }));
    const tagSelect = (
        <Select
            options={tagOptions}
            isDisabled={!newLayerState.type}
            components={customTagComponents}
            value={
                newLayerState.tag === undefined
                    ? null
                    : ({
                          label: newLayerState.tag.trim()
                              ? newLayerState.tag
                              : '[none]',
                          value: newLayerState.tag,
                          faction1: newLayerState.layer?.faction1,
                          faction2: newLayerState.layer?.faction2,
                      } as TagOption)
            }
            onChange={setTagState}
        />
    );

    // We want to clean up the modal when we close it, so that no state is left behind.
    // Let's just curry the onClose with some of our own functionality.
    const augmentedOnClose = () => {
        onClose();
        setNewLayerState({});
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={augmentedOnClose}
            size="full"
            scrollBehavior="inside"
        >
            <ModalOverlay />
            <ModalContent margin="2vw">
                <ModalHeader>New layer</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <TableContainer minHeight="50vh">
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th minWidth="25vw">Map name</Th>
                                    <Th width="20vw">Game mode</Th>
                                    <Th width="20vw">Tag</Th>
                                    <Th width="13vw">Faction 1</Th>
                                    <Th width="13vw">Faction 2</Th>
                                </Tr>
                            </Thead>

                            <Tbody>
                                <Tr key="input">
                                    <Td>{mapSelect}</Td>
                                    <Td>{typeSelect}</Td>
                                    <Td>{tagSelect}</Td>
                                    <Td>
                                        {newLayerState.layer?.faction1?.asTag}
                                    </Td>
                                    <Td>
                                        {newLayerState.layer?.faction2?.asTag}
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default function Home(): JSX.Element {
    const { toggleColorMode } = useColorMode();
    const layerListDisclosure = useDisclosure();
    const newLayerDisclosure = useDisclosure();
    const [state, setState] = useState<LayersState>({ rows: [] });

    return (
        <>
            <Flex
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                minWidth="100vw"
                bg={useColorModeValue('gray.100', 'gray.800')}
            >
                <Box
                    width="80vw"
                    height="80vh"
                    padding="20px"
                    bg={useColorModeValue('gray.300', 'gray.700')}
                    borderRadius="20px"
                >
                    <IconButton
                        size="sm"
                        mx="5px"
                        aria-label="Toggle colour scheme mode"
                        onClick={toggleColorMode}
                        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                    />

                    <Button
                        size={'sm'}
                        onClick={layerListDisclosure.onOpen}
                        mx="5px"
                    >
                        Open layer list (Slow!)
                    </Button>

                    <TableContainer minHeight="80vh">
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th isNumeric width="4em"></Th>
                                    <Th isNumeric width="2em">
                                        #
                                    </Th>
                                    <Th minWidth="10vw">Map name</Th>
                                    <Th width="10vw">Game mode</Th>
                                    <Th>Tag</Th>
                                    <Th width="13vw">Faction 1</Th>
                                    <Th width="13vw">Faction 2</Th>
                                </Tr>
                            </Thead>

                            <Tbody>
                                {state.rows.map((row, idx) => (
                                    <Tr key={idx}>
                                        <Td isNumeric>
                                            <EditIcon /> <InfoIcon />
                                        </Td>
                                        <Td isNumeric>{idx + 1}</Td>
                                        <Td>{row?.map?.asTag ?? <></>}</Td>
                                        <Td>{row?.type?.asTag ?? <></>}</Td>
                                        <Td>
                                            {row?.tag ? (
                                                <Tag>{row.tag}</Tag>
                                            ) : (
                                                <></>
                                            )}
                                        </Td>
                                        <Td>
                                            {row ? row.faction1.asTag : <></>}
                                        </Td>
                                        <Td>
                                            {row ? row.faction2.asTag : <></>}
                                        </Td>
                                    </Tr>
                                ))}

                                <Tr key="add-new-element">
                                    <Td isNumeric>
                                        <IconButton
                                            aria-label="Add new button"
                                            icon={<AddIcon />}
                                            size="sm"
                                            onClick={newLayerDisclosure.onOpen}
                                        />
                                    </Td>
                                    {/* we need to add the other columns as well, because of light mode adding lines underneath */}
                                    <Td isNumeric></Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                </Tr>
                            </Tbody>

                            <Tfoot>
                                <Tr>
                                    <Th isNumeric></Th>
                                    <Th isNumeric>#</Th>
                                    <Th>Map name</Th>
                                    <Th>Game mode</Th>
                                    <Th>Tag</Th>
                                    <Th>Faction 1</Th>
                                    <Th>Faction 2</Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>
                </Box>
            </Flex>

            <LayerListModal
                isOpen={layerListDisclosure.isOpen}
                onClose={layerListDisclosure.onClose}
            />
            <NewLayerModal
                state={state}
                setState={setState}
                isOpen={newLayerDisclosure.isOpen}
                onClose={newLayerDisclosure.onClose}
            />
        </>
    );
}
