<template>
    <div>
        <LinkTest />
        <ButtonTest />
        <ContainerTest />
        <RowAndColTest />
    </div>
</template>

<script>
import RowAndColTest from '@/components/test/RowAndColTest';
import ContainerTest from '@/components/test/ContainerTest';
import ButtonTest from '@/components/test/ButtonTest';
import LinkTest from '@/components/test/LinkTest';
export default {
    name: 'App',
    components: {
        RowAndColTest,
        ContainerTest,
        ButtonTest,
        LinkTest
    }
};
</script>
