import '../sass/field.scss'

import DetailField from './components/DetailField.vue'
import DetailGroup from './components/DetailGroup.vue'
import FormField from './components/FormField.vue'
import FormGroup from './components/FormGroup.vue'
import OriginalDropMenu from './components/OriginalDropMenu.vue'
import SearchMenu from './components/SearchMenu.vue'
import DeleteGroupModal from './components/DeleteGroupModal.vue'

Nova.booting((Vue) => {
    Vue.component('detail-nova-flexible-content', DetailField)
    Vue.component('detail-nova-flexible-content-group', DetailGroup)
    Vue.component('form-nova-flexible-content', FormField)
    Vue.component('form-nova-flexible-content-group', FormGroup)
    Vue.component('flexible-drop-menu', OriginalDropMenu)
    Vue.component('flexible-search-menu', SearchMenu)
    Vue.component('delete-flexible-content-group-modal', DeleteGroupModal)
})
