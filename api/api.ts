export * from './advertiserController.service';
import { AdvertiserControllerService } from './advertiserController.service';
export * from './playlistController.service';
import { PlaylistControllerService } from './playlistController.service';
export * from './searchController.service';
import { SearchControllerService } from './searchController.service';
export * from './userController.service';
import { UserControllerService } from './userController.service';
export const APIS = [AdvertiserControllerService, PlaylistControllerService, SearchControllerService, UserControllerService];
