export default {
    template: `
        <section>
            <h2 v-show="inProgressAssignments.length" class="font-bold mb-2">In Progress</h2>

            <ul>
                <li 
                    v-for="assignment in inProgressAssignments" 
                    :key="assignment.id"
                >
                    <label for="">
                        {{ assignment.name }}


                        <input type="checkbox" v-model="assignment.complete">
                    </label>
                </li>
            </ul>

        </section>

        <section v-show="completedAssignments.length" class="mt-8">
            <h2 class="font-bold mb-2">Completed</h2>

            <ul>
                <li 
                    v-for="assignment in completedAssignments" 
                    :key="assignment.id"
                >
                    <label for="">
                        {{ assignment.name }}


                        <input type="checkbox" v-model="assignment.complete">
                    </label>
                </li>
            </ul>

        </section>
    `,

    data() {
        return {
            assignments: [
                { name: 'Finish Project', complete: false, id: 1 },
                { name: 'Read Chapter 4', complete: false, id: 2 },
                { name: 'Turn in Homework', complete: false, id: 3 },
            ]
        }
    },

    computed: {
        inProgressAssignments() {
            return this.assignments.filter(assignment => !assignment.complete)
        },

        completedAssignments() {
            return this.assignments.filter(assignment => assignment.complete)
        }

    }
}