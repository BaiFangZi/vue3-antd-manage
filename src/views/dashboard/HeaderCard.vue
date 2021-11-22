<template>
  <div style="margin-bottom: 30px">
    <a-row :gutter="16">
      <a-col :span="6">
        <a-card>
          <a-statistic title="访问量" :value="11234">
            <template #prefix> </template>
          </a-statistic>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card>
          <a-statistic title="Star" :value="100">
            <template #prefix> </template>
          </a-statistic>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card>
          <a-statistic title="卡片三" :value="9.3" suffix="%" :value-style="{ color: '#cf1322' }">
            <template #prefix> </template>
          </a-statistic>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card>
          <a-statistic title="卡片四" :value="9.3" suffix="%" :value-style="{ color: '#cf1322' }">
            <template #prefix> </template>
          </a-statistic>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
