import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient()

//* MODELS
export  const ClienModel= prisma.client
export const UserModel= prisma.user
export const RoleModel= prisma.role
export const HotelModel= prisma.hotel
export const CityModel= prisma.city
export const CountryModel= prisma.country
export const DistritModel= prisma.distrit
export const HotelRoomModel= prisma.hotel_room
export const ReservationModel= prisma.reservation
export const ReservationDetailModel= prisma.reservation_has_city
