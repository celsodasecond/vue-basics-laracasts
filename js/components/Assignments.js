import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js"

export default {
    components: {
        AssignmentList,
        AssignmentCreate
    },

    template: `
        <section class="flex gap-8">
            <AssignmentList :assignments="filters.inProgress" title="In Progress">
                <AssignmentCreate @add="add"></AssignmentCreate>
            </AssignmentList>

            <div v-show="showCompleted">
                <AssignmentList 
                    :assignments="filters.completed" 
                    title="Completed" 
                    canToggle
                    @toggle="showCompleted = !showCompleted"
                ></AssignmentList>
            </div>
            
        </section> 
    `,

    data() {
        return {
            assignments: [],
            showCompleted: false
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    },

    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            })
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1
            })
        },
    }
}