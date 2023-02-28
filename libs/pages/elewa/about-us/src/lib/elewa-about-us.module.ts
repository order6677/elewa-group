import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners';
import { TeamMembersCarouselComponent } from './components/team-members-carousel/team-members-carousel.component';
import { AboutUsCultureComponent } from './components/about-us-culture/about-us-culture.component';

import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';

import { NextDirective } from './directives/next.directive';
import { PrevDirective } from './directives/prev.directive';

import { AboutUsRoutingModule } from './about-us.routing';
import { WeCareSectionComponent } from './components/we-care-section/we-care-section.component';
import { CardsModule } from '@elewa-group/features/components/cards';
 

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    CardsModule,
    BannersModule,
    AboutUsRoutingModule
  ],
  declarations: [
    TeamMembersCarouselComponent,
    NextDirective,
    PrevDirective,
    AboutUsCultureComponent,
    AboutUsPageComponent,
    WeCareSectionComponent,
  ],
  exports: [TeamMembersCarouselComponent,WeCareSectionComponent],
})
export class AboutUsModule {}
