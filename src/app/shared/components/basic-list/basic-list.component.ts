
/* Exemplo de uso do componente BasicListComponent (estilo Angular Material):
-----------------------------NO TS:-------------------------------------

import { Component } from '@angular/core';
import { BasicListComponent } from './shared/components/basic-list/basic-list.component';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [BasicListComponent],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  // Define as colunas que serão exibidas no cabeçalho
  headerColumns = ['Nome', 'Idade', 'Email'];
  
  // Define a ordem e nomes das propriedades dos dados
  columnsOrder = ['nome', 'idade', 'email'];
  
  // Dados para exibir na tabela
  dados = [
    { nome: 'João Silva', idade: 30, email: 'joao@example.com' },
    { nome: 'Maria Santos', idade: 25, email: 'maria@example.com' },
    { nome: 'Pedro Costa', idade: 35, email: 'pedro@example.com' }
  ];

  editar(element: any) {
    console.log('Editar usuário:', element);
  }

  excluir(element: any) {
    console.log('Excluir usuário:', element);
  }

  visualizar(element: any) {
    console.log('Visualizar usuário:', element);
  }
}
-----------------------------NO HTML:-----------------------------------

<app-basic-list 
  [headerColumns]="headerColumns"
  [dataSource]="dados"
  [columnsOrder]="columnsOrder">
  
  <!-- Template de ações - let-element é o objeto da linha, let-index é o índice -->
  <ng-template #actionTemplate let-element let-index="index">
    <button class="mat-raised-button" (click)="editar(element)">
      Editar
    </button>
    <button class="mat-stroked-button mat-warn" (click)="excluir(element)">
      Excluir
    </button>
    <button class="mat-button" (click)="visualizar(element)">
      Ver
    </button>
  </ng-template>

</app-basic-list>

-----------------------------PROPRIEDADES DO COMPONENTE:-------------
📋 headerColumns: string[]   - Títulos das colunas no cabeçalho
📊 dataSource: any[]         - Array de dados para exibir
🔀 columnsOrder: string[]    - Ordem das propriedades dos objetos
🎬 actionTemplate           - Template opcional para ações

-----------------------------CLASSES DISPONÍVEIS PARA BOTÕES:--------
🔵 .mat-raised-button       - Botão elevado (ação primária)
🔘 .mat-stroked-button      - Botão com borda (ação secundária)
⚪ .mat-button              - Botão de texto (ação terciária)
🔴 .mat-warn                - Modificador de perigo (vermelho)
🟢 .mat-primary             - Modificador primário (azul)
🟡 .mat-accent              - Modificador de destaque

-----------------------------ESTRUTURA CSS AUTOMÁTICA:---------------
🏗️  .mat-elevation-z2       - Elevação Material aplicada automaticamente
📱 Responsividade           - Breakpoints para tablet e mobile
🎨 Tema CSS Variables       - Integração com sistema de cores
🔄 Transições suaves        - Animações em 0.28s cubic-bezier
📜 Scroll customizado       - Scrollbar estilizada
------------------------------------------------------------------
*/

import { Component, Input, TemplateRef, ContentChild } from '@angular/core';
import { NgTemplateOutlet, TitleCasePipe } from '@angular/common';
import { EmptyStateComponent } from '../empty-state/empty-state.component';

@Component({
  selector: 'app-basic-list',
  imports: [NgTemplateOutlet, TitleCasePipe,EmptyStateComponent],
  templateUrl: './basic-list.component.html',
  styleUrl: './basic-list.component.scss'
})
export class BasicListComponent {

  constructor() { }

  @Input({required:true}) headerColumns: string[] = [];
  @Input({required:true}) dataSource: any[] = [];
  @Input({required:true}) columnsOrder: string[] = []; // Define a ordem específica das colunas

  @Input({required:true}) idTrack = 'id'; // Propriedade para identificar cada item, padrão é 'id'

  
  @ContentChild('actionTemplate', { static: false }) actionTemplate!: TemplateRef<any>;





}
