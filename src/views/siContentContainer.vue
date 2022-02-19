<template>
    <div class="si-content-container">
        <div class="graph-Toolbar">
            {{colorPickerValue}}
            <X6ColorPicker :predefineColors="predefineColors" @change="changeColorPickerValue" :value="colorPickerValue"></X6ColorPicker>
            <X6Menu border>
                <X6MenuItem name="undo">Undo</X6MenuItem>
                <X6MenuItem name="redo">Redo</X6MenuItem>
                <X6MenuItem name="cut">Cut</X6MenuItem>
                <X6Divider/>
                <X6MenuItem name="copy">Copy</X6MenuItem>
                <X6MenuItem name="paste">Paste</X6MenuItem>
                <X6MenuItem name="delete">Delete</X6MenuItem>
            </X6Menu>
            <X6Toolbar :onClick="test">
                <X6Group>
                     <!-- tooltip="my tooltip" -->
                    <X6Item name="123" text="123" tooltip="my tooltip" dropdownArrow>
                        <template #dropdown="scope">
                            <X6Menu :onClick="scope.onClick" :registerHotkey="registerHotkey">
                                <X6MenuItem name="cut" icon="el-icon-coffee">test1</X6MenuItem>
                                <X6MenuItem name="copy">test2</X6MenuItem>
                                <X6MenuItem name="cut-copy" hotkey="Ctrl+X">test3</X6MenuItem>
                                <X6Divider/>
                                <X6SubMenu icon="el-icon-coffee" text="Appearance">
                                    <X6MenuItem name="Ctrl+D" hotkey="Ctrl+D">test4</X6MenuItem>
                                </X6SubMenu>
                                <div v-for="(i) in 50" :key="i">
                                    123
                                </div>
                            </X6Menu>
                        </template>
                    </X6Item>
                    <X6Item name="456">
                        <X6ContextMenu :tAnimateFill="true">
                            444
                            <template #menu>
                                <X6Menu>
                                    <X6MenuItem key="1">1st menu item</X6MenuItem>
                                    <X6MenuItem key="2">2nd menu item</X6MenuItem>
                                    <X6MenuItem key="3">3rd menu item</X6MenuItem>
                                </X6Menu>
                            </template>
                        </X6ContextMenu>
                    </X6Item>
                </X6Group>
                <template #extra>
                    Here
                </template>
            </X6Toolbar>
            <div>
                <div style="background: rgb(245, 245, 245); display: flex; height: 30px; line-height: 30px;">
                    <X6Menubar>
                        <X6MenubarItem text="File">
                            <X6Menu :onClick="onMenuClick">
                                <X6MenuItem name="newFile" hotkey="Cmd+N">
                                    New File
                                </X6MenuItem>
                                <X6MenuItem name="newWindow" hotkey="Cmd+Shift+N">
                                    New Window
                                </X6MenuItem>
                                <X6Divider />
                                <X6MenuItem name="open" hotkey="Cmd+O">
                                    Open...
                                </X6MenuItem>
                                <X6MenuItem name="openWorkspace">Open Workspace...</X6MenuItem>
                                <X6Divider />
                                <X6MenuItem name="save" hotkey="Cmd+S">
                                    Save
                                </X6MenuItem>
                                <X6MenuItem name="saveAs" hotkey="Cmd+Shift+S">
                                    Save As...
                                </X6MenuItem>
                                <X6MenuItem name="saveAll" hotkey="Cmd+Alt+S">
                                    Save All
                                </X6MenuItem>
                            </X6Menu>
                        </X6MenubarItem>
                        <X6MenubarItem text="Edit">
                            <X6Menu>
                                <X6MenuItem name="undo" hotkey="Cmd+Z">
                                    Undo
                                </X6MenuItem>
                                <X6MenuItem name="redo" hotkey="Cmd+Shift+Z">
                                    Redo
                                </X6MenuItem>
                                <X6Divider />
                                <X6MenuItem name="cut" hotkey="Cmd+X">
                                    Cut
                                </X6MenuItem>
                                <X6MenuItem name="copy" hotkey="Cmd+C">
                                    Copy
                                </X6MenuItem>
                                <X6MenuItem name="paste" hotkey="Cmd+V" :disabled="true">
                                    Paste
                                </X6MenuItem>
                                <X6Divider />
                                <X6MenuItem name="find" hotkey="Cmd+F">
                                    Find
                                </X6MenuItem>
                                <X6MenuItem name="replace" hotkey="Cmd+Alt+F">
                                    Replace
                                </X6MenuItem>
                            </X6Menu>
                        </X6MenubarItem>
                        <X6MenubarItem text="View">
                            <X6Menu>
                                <X6MenuItem name="zen" hotkey="Cmd+K Z">
                                    Zen Mode
                                </X6MenuItem>
                                <X6MenuItem name="fullscreen" hotkey="Cmd+Shift+F">
                                    Full Screen
                                </X6MenuItem>
                                <X6Divider />
                                <X6SubMenu text="Appearance" arrow>
                                    <X6MenuItem name="side-bar">Show Side Bar</X6MenuItem>
                                    <X6MenuItem name="status-bar">Show Status Bar</X6MenuItem>
                                    <X6MenuItem name="activity-bar">Show Activity Bar</X6MenuItem>
                                    <X6MenuItem name="editor-area">Show Editor Area</X6MenuItem>
                                    <X6MenuItem name="show-panel">Show Panel</X6MenuItem>
                                </X6SubMenu>
                                <X6Divider />
                                <X6MenuItem name="zoomin" hotkey="Cmd +">
                                    Zoom In
                                </X6MenuItem>
                                <X6MenuItem name="zoomout" hotkey="Cmd -">
                                    Zoom Out
                                </X6MenuItem>
                            </X6Menu>
                        </X6MenubarItem>
                        <X6MenubarItem text="Help">
                            <X6Menu>
                                <X6MenuItem name="welcome">Welcome</X6MenuItem>
                                <X6MenuItem name="documention">Documention</X6MenuItem>
                                <X6MenuItem name="about">Aoubt</X6MenuItem>
                            </X6Menu>
                        </X6MenubarItem>
                        <template #extra>
                            <div>Extra Component</div>
                        </template>
                    </X6Menubar>
                </div>
            </div>
            <div style="height: 400px;">
                <div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; background: rgb(245, 245, 245); user-select: none;">
                    <X6SplitBox
                        split="horizontal"
                        :minSize="80"
                        :maxSize="-80"
                        defaultSize='80%'
                        primary="second"
                        :resizerStyle="{background: '#e9e9e9'}"
                    >
                        <template #first>
                            <div style="width: 100%; height: 100%; background: #fff7e6;"/>
                        </template>
                        <template #second>
                            <X6SplitBox
                                split="vertical"
                                :minSize="40"
                                :maxSize="-160"
                                :defaultSize="240"
                                primary="first"
                                :resizerStyle="{background: '#e9e9e9'}"
                            >
                                <template #first>
                                    <div style="width: 100%; height: 100%; background: #fff0f6;"/>
                                </template>
                                <template #second>
                                    <div style="width: 100%; height: 100%;">
                                        <X6SplitBox
                                            split="vertical"
                                            :minSize="40"
                                            :maxSize="-80"
                                            defaultSize='40%'
                                            primary="second"
                                            :resizerStyle="{background: '#e9e9e9'}"
                                        >
                                            <template #first>
                                                <div style="width: 100%; height: 100%;">
                                                    <X6SplitBox
                                                        split="horizontal"
                                                        :minSize="40"
                                                        :maxSize="-40"
                                                        :defaultSize="80"
                                                        primary="first"
                                                        :resizerStyle="{background: '#e9e9e9'}"
                                                    >
                                                        <template #first>
                                                            <div style="width: 100%; height: 100%; background: #e6f7ff;"/>
                                                        </template>
                                                        <template #second>
                                                            <div style="width: 100%; height: 100%; background: #e6fffb;"/>
                                                        </template>
                                                    </X6SplitBox>
                                                </div>
                                            </template>
                                            <template #second>
                                                <div style="width: 100%; height: 100%; background: #f6ffed;"/>
                                            </template>
                                        </X6SplitBox>
                                    </div>
                                </template>
                            </X6SplitBox>
                        </template>
                    </X6SplitBox>
                </div>
            </div>
        </div>
        <X6Scrollbox style="max-height: 350px">
            <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.

                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.

                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.
            </p>
            <p style="width: 120%;">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.

                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.

                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.
            </p>
            <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.

                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.

                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.
            </p>
        </X6Scrollbox>
        <div class="graph-container">
            <div ref="stencil"></div>
            <div ref="container"></div>
            <div ref="format"></div>
        </div>
    </div>
</template>
<script>
import hotkeys from 'hotkeys-js';
// import 'x6-vue3-components/lib/x6-vue3-components.min.css';
// import { X6ColorPicker, X6Toolbar, X6Group, X6Item, X6ContextMenu, X6Menu, X6SubMenu, X6MenuItem, X6Divider, X6Menubar, X6MenubarItem, X6Scrollbox, X6SplitBox } from 'x6-vue3-components';
export default {
    name: 'SiContentContainer',
    // components: {
    //     X6Toolbar,
    //     X6Group,
    //     X6Item,
    //     X6ContextMenu,
    //     X6Menu,
    //     X6SubMenu,
    //     X6MenuItem,
    //     X6Divider,
    //     X6Menubar,
    //     X6MenubarItem,
    //     X6SplitBox,
    //     X6ColorPicker,
    //     X6Scrollbox
    // },
    data() {
        return {
            colorPickerValue: '#000000',
            predefineColors: [
                '#ff4500',
                '#ff8c00',
                '#ffd700',
                '#90ee90',
                '#00ced1',
                '#1e90ff',
                '#c71585',
                'rgba(255, 69, 0, 0.68)',
                'rgb(255, 120, 0)',
                'rgba(51, 100, 98)',
                'rgba(120, 40, 94, 0.5)',
                'hsl(181, 100%, 37%)',
                'hsla(209, 100%, 56%, 0.73)',
                '#c7158577'
            ]
        }
    },
    methods: {
        changeColorPickerValue(color) {
            this.colorPickerValue = color
        },
        test(name) {
            alert(name)
        },
        registerHotkey(hotkey, handle) {
            hotkeys(hotkey.toLowerCase(), () => {
                handle()
            })
        },
        onMenuClick(name) {
            alert(name)
        }
    }
}
</script>