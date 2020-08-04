<template>
<li>
    <div class="userList">
        <div class="punkt">
            <button
                v-if="!locked"
                value="content"
                @click="update(content)"
            >
                <img src="../assets/images/check.svg">
            </button>
            <label 
                v-if="locked"
                @click="locked = false"
            >
                {{ user.firstname }}
            </label>
            <input
                v-else
                class="edit" 
                type="text"
                v-model="content"
                @keyup.enter="update(content)"
            >
        </div>
        <div class="punkt">
            <button
                v-if="!lockedLastname"
                value="contentLastname"
                @click="updateLastname(contentLastname)"
            >
                <img src="../assets/images/check.svg">
            </button>
            <label 
                v-if="lockedLastname"
                @click="lockedLastname = false"
            >
                {{ user.lastname }}
            </label>
            <input
                v-else
                class="edit" 
                type="text"
                v-model="contentLastname"
                @keyup.enter="updateLastname(contentLastname)"
            >
        </div>
        <div class="punkt">
            <button
                v-if="!lockedEmail"
                value="contentEmail"
                @click="updateEmail(contentEmail)"
            >
                <img src="../assets/images/check.svg">
            </button>
            <label 
                v-if="lockedEmail"
                @click="lockedEmail = false"
            >
                {{ user.email }}
            </label>
            <input
                v-else
                class="edit" 
                type="text"
                v-model="contentEmail"
                @keyup.enter="updateEmail(contentEmail)"
            >
        </div>
    </div>
	<button
        class="destroy"
        @click="remove"
    />

</li>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'accounts',
    props: {
        user: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            content: this.user.firstname,
            locked: true,

            contentLastname: this.user.lastname,
            lockedLastname: true,

            contentEmail: this.user.email,
            lockedEmail: true,

            // sortedProducts: []
        }
    },

    // filteredProducts() {
    //     if (this.sortedProducts.length) {
    //         return this.sortedProducts
    //     } else {
    //         return this.user
    //     }
    // },
    methods: {
        // ...mapActions([
        //     'GET_USERS_FROM_API',
		// ]),
        remove() {
            this.$store.commit('REMOVE', this.user.id)
        },
        update(content) {
            this.$store.commit('UPDATE', { id: this.user.id, content })
            this.locked = true
        },
        updateLastname(contentLastname) {
            this.$store.commit('UPDATELASTNAME', { id: this.user.id, contentLastname })
            this.lockedLastname = true
        },
        updateEmail(contentEmail) {
            this.$store.commit('UPDATEEMAIL', { id: this.user.id, contentEmail })
            this.lockedEmail = true
        },
        // sortusers(value) {
        //     if (value) {
        //         this.sortedProducts = this.sortedProducts.filter(function (item) {
        //              return item.firstname.toLowerCase().includes(value.toLowerCase())
        //         })
        //     } else {
        //         this.sortedProducts = this.user
        //     }

        // }
    },
    // watch: {
    //     SEARCH_VALUE() {
    //         this.sortusers(this.SEARCH_VALUE)
    //     }
    // },
    // computed: {
    //     ...mapGetters([
    //         'SEARCH_VALUE'
    //     ])
    // }, 
}
</script>

<style scoped lang='scss'>
li {
    display: flex;

    background-color: #fff;
    border: 1px solid rgba(255,74,86,1);
    border-radius: 10px;
    width: 350px;
    
    padding: 12px 0;
    margin: 5px 10px;
    font-size: 24px;
    .edit {
        position: relative;
        margin: 0;
            margin-left: 11px;

        width: 100%;
        line-height: 1.1;

        font-size: 24px;
        color: inherit;
        border-bottom: 1px solid rgba(255,74,86,1);
    }
}
label {
    word-break: break-all;
    padding-left: 27px;
    line-height: 1.1;
    transition: color 0.3s;
    color: #1c1c1c;
}
.punkt {
    display: flex;
    margin-left: 10px;
    img {
        width: 15px;
    }
}

.destroy{
    display: block;
	width: 40px;
	height: 40px;
	margin-left: auto;
	font-size: 30px;
	color: #cc9a9a;
    // transition: color 0.2s ease-out;
    &:hover {
	color: #1c1c1c;
    }
    &:focus {
	color: #af5b5e;
    }
    &:after {
	content: '×';
    }
}

.userList {
    display: flex;
    flex-direction: column;
}



</style>