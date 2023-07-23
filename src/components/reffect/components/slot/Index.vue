<script setup>
import One from './One.vue';
import Three from './Three.vue';
import Default from './Default.vue';
import DefaultName from './DefaultName.vue';
import ScopedOne from './ScopedOne.vue';
import ScopedTwo from './ScopedTwo.vue';
import JSONPlaceholder from './JSONPlaceholder.vue';
</script>

<template>
    <h2>slot</h2>
    <One>Tom</One>
    <One>
        <strong>
            John
        </strong>
    </One>
    <One></One>

    <Three>
        <!-- <template v-slot="title">
            <h3>タイトル</h3>
        </template> -->
        <template v-slot:title>
            <h3>three タイトル</h3>
        </template>
        <template v-slot:content>
            <div>
                <div>John Doe</div>
                <div>Jane Doe</div>
            </div>
        </template>
        <template #actions>
            <button>ユーザの追加</button>
        </template>
    </Three>

    <Default>
        <template #title>
            <h3>default タイトル</h3>
        </template>
        <div>
            <div>John Doe</div>
            <div>Jane Doe</div>
        </div>
        <template #actions>
            <button>ユーザの追加</button>
        </template>
    </Default>

    <Default>
        <template #title>
            <h3>default with name タイトル</h3>
        </template>
        <template #default>
            <div>
                <div>John Doe</div>
                <div>Jane Doe</div>
            </div>
        </template>
        <template #actions>
            <button>ユーザの追加</button>
        </template>
    </Default>

    <DefaultName>
        <div>
            <div>John Doe</div>
            <div>Jane Doe</div>
        </div>
        <template #actions>
            <button>ユーザの追加</button>
        </template>
        <template #title>
            <h3>name="default" タイトル</h3>
        </template>
    </DefaultName>

    <h3>Scoped One</h3>
    <ScopedOne v-slot:default="slotProps">slot-props: {{ slotProps }}</ScopedOne>
    <ScopedOne v-slot:default="slotProps">message: {{ slotProps.message }}</ScopedOne>

    <h3>Scoped Two</h3>
    <ScopedTwo>
        <template v-slot:header="slotProps">{{ slotProps }}</template>
        <template v-slot:default="slotProps">{{ slotProps }}</template>
    </ScopedTwo>
    <ScopedTwo>
        <template #header="slotProps">{{ slotProps }}</template>
        <template #default="slotProps">{{ slotProps }}</template>
    </ScopedTwo>
    <ScopedTwo>
        <template #header="slotProps">{{ slotProps }}</template>
        <template #="slotProps">{{ slotProps }}</template>
    </ScopedTwo>
    <ScopedTwo>
        <template #header="slotProps">{{ slotProps }}</template>
        <template #="{ message, content }">{{ message }} / {{ content }}</template>
    </ScopedTwo>

    <JSONPlaceholder #="{ user }">
        <div>{{ user }}</div>
    </JSONPlaceholder>
    <JSONPlaceholder #="{ user }">
        <div>{{ user.name }}</div>
    </JSONPlaceholder>
</template>
