FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/MR-KALINDU/ROWDY-BABY-MD-V2 /root/MR-KALINDU
WORKDIR /root/MR-KALINDU/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
