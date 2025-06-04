// app/dashboard/page.tsx
'use client';

import Link from 'next/link';
import React, { useState, useEffect, useMemo } from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

import mockData from '@/data/dataMockDash.json';
import ThemeToggle from '@/app/components/ThemeToggle';

interface SaleData {
  id: string;
  month: string;
  category: string;
  region: string;
  unitsSold: number;
  revenue: number;
}

// Colores para las secciones del gráfico de torta
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function DashboardPage() {
  
  const [data, setData] = useState<SaleData[]>([]);
  const [loading, setLoading] = useState(true);

  // NUEVO: Estados para filtros
  const [regionFilter, setRegionFilter] = useState<string>('Todas');
  const [categoryFilter, setCategoryFilter] = useState<string>('Todas');

  // Simula la carga de datos cuando el componente se monta
  useEffect(() => {
    setData(mockData as SaleData[]);
    setLoading(false);
  }, []);

  // NUEVO: Listas únicas de regiones y categorías
  const regions = useMemo(() => ['Todas', ...Array.from(new Set((mockData as SaleData[]).map(d => d.region)))], []);
  const categories = useMemo(() => ['Todas', ...Array.from(new Set((mockData as SaleData[]).map(d => d.category)))], []);

  // NUEVO: Filtra los datos según los filtros seleccionados
  const filteredData = useMemo(() => {
    return data.filter(item =>
      (regionFilter === 'Todas' || item.region === regionFilter) &&
      (categoryFilter === 'Todas' || item.category === categoryFilter)
    );
  }, [data, regionFilter, categoryFilter]);

  // Procesa los datos para el gráfico de línea 'Ingresos por Mes'
  const revenueByMonth = useMemo(() => {
    if (!filteredData.length) return [];
    const monthly: { [key: string]: number } = {};
    // Orden estándar de los meses para la clasificación
    const monthOrder = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    filteredData.forEach(item => {
      monthly[item.month] = (monthly[item.month] || 0) + item.revenue;
    });
    // Mapea y ordena los datos según el orden de los meses
    return monthOrder
      .filter(month => monthly[month] !== undefined)
      .map(month => ({ name: month, Ingresos: monthly[month] }));
  }, [filteredData]);

  // Procesa los datos para el gráfico de torta 'Ventas por Categoría'
  const salesByCategory = useMemo(() => {
    if (!filteredData.length) return [];
    const categorySales: { [key: string]: number } = {};
    filteredData.forEach(item => {
      categorySales[item.category] = (categorySales[item.category] || 0) + item.unitsSold;
    });
    return Object.entries(categorySales).map(([name, value]) => ({ name, Unidades: value }));
  }, [filteredData]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-background text-foreground">
        <p className="text-xl font-mono">Cargando dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-mono text-primary mb-2">
          Dashboard de Ventas (Demo)
        </h1>
        <p className="text-foreground/80">
          Visualización interactiva de datos de ventas ficticios.
        </p>
        <Link href="/" className="text-primary hover:underline mt-4 inline-block">
          &larr; Volver al Portafolio
        </Link>
      </header>

      {/* NUEVO: Filtros */}
      <section className="mb-8 flex flex-wrap gap-4 items-center">
        <label className="font-mono text-sm">
          Región:&nbsp;
          <select
            value={regionFilter}
            onChange={e => setRegionFilter(e.target.value)}
            className="border rounded px-2 py-1 text-sm"
          >
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </label>
        <label className="font-mono text-sm">
          Categoría:&nbsp;
          <select
            value={categoryFilter}
            onChange={e => setCategoryFilter(e.target.value)}
            className="border rounded px-2 py-1 text-sm"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>
      </section>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tarjeta KPI: Ingresos Totales */}
        <div className="bg-background border border-foreground/10 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-foreground/70 mb-1">Ingresos Totales</h3>
          <p className="text-3xl font-bold text-primary">
            ${filteredData.reduce((acc, item) => acc + item.revenue, 0).toLocaleString()}
          </p>
        </div>

        {/* Tarjeta KPI: Unidades Vendidas */}
        <div className="bg-background border border-foreground/10 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-foreground/70 mb-1">Unidades Vendidas</h3>
          <p className="text-3xl font-bold text-primary">
            {filteredData.reduce((acc, item) => acc + item.unitsSold, 0).toLocaleString()}
          </p>
        </div>
        
        {/* Tarjeta KPI de ejemplo / Placeholder */}
        <div className="bg-background border border-foreground/10 p-6 rounded-lg shadow flex items-center justify-center">
          <p className="text-foreground/50">Otro KPI / Filtros</p>
        </div>

        {/* Gráfico de Línea: Ingresos por Mes */}
        <div className="md:col-span-2 lg:col-span-2 bg-background border border-foreground/10 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold font-mono mb-4">Ingresos por Mes</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueByMonth}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--foreground) / 0.1)" />
              <XAxis dataKey="name" stroke="hsl(var(--foreground) / 0.7)" />
              <YAxis stroke="hsl(var(--foreground) / 0.7)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  borderColor: 'hsl(var(--primary))',
                  color: 'hsl(var(--foreground))'
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="Ingresos" stroke="hsl(var(--primary))" strokeWidth={2} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de Torta: Unidades Vendidas por Categoría */}
        <div className="lg:col-span-1 bg-background border border-foreground/10 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold font-mono mb-4">Ventas por Categoría</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={salesByCategory}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="hsl(var(--primary))" // Relleno por defecto, sobrescrito por Cell
                dataKey="Unidades"
                nameKey="name"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {salesByCategory.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                 contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  borderColor: 'hsl(var(--primary))',
                  color: 'hsl(var(--foreground))'
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
}