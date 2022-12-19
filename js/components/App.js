import Assignments from "./Assignments.js"
import Panel from "./Panel.js"

export default {
    components: { Assignments, Panel },

    template: `
        <div class="grid gap-6">
            <Assignments></Assignments>

            <Panel>
                This is my default content
            </Panel>

            <Panel>
                <template v-slot:heading>
                    Hello Again!
                </template>
                
                This is my default content
            </Panel>

            <Panel>
                <template v-slot:heading>
                    Hello Again!
                </template>
                
                This is my default content

                <template v-slot:footer>
                    Click here to learn more.
                </template>
            </Panel>

            <Panel theme="light">
                <template v-slot:heading>
                    Hello Again!
                </template>
                
                This is my default content

                <template v-slot:footer>
                    Click here to learn more.
                </template>
            </Panel>
        </div>
        
    `,

    
}