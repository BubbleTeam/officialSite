<template>
<div>
    <top-navbar />
    <focus-set />
    <common-footer />
</div>
</template>

<script>
import TopNavbar from 'comp/top.navbar';
import FocusSet from 'comp/focus.set';
import CommonFooter from 'comp/common.footer';

export default {
    components: {
        'top-navbar': TopNavbar,
        'focus-set': FocusSet,
        'common-footer': CommonFooter
    }
};
</script>

<style scoped lang="less">

</style>